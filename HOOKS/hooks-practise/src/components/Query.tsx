/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-promise-executor-return */
/* eslint-disable @typescript-eslint/promise-function-async */
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ButtonStyled, TextInfo, Tilediv } from "../styles/styles";
import Informator from "./Informator";

// w index.tsx mam provider Query

// symulacja danych z API:
const POSTS = [
  { id: "1", title: "post1" },
  { id: 2, title: "post2" },
];

const Query = () => {
  const queryClient = useQueryClient(); // zwraca tylko do co zrobiliśmy w index html

  // tu cały useQuery
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]), // opóźniam "pobieranie" danych z tablicy POSTS
  });

  // opóźnienie oparte na obietnicy
  const wait = (duration: any) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
  };
  // dorzucanie kolejnego postu do tablicy
  const newPostsMutation = useMutation({
    mutationFn: (title: any) => {
      return wait(1000).then(() =>
        POSTS.push({ id: crypto.randomUUID(), title }),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  // dodatkowe opcje, sprawdzanie różnych stanów
  if (postsQuery.isLoading) return <h1> Loading... </h1>;
  if (newPostsMutation.isLoading) return <h1> Loading... </h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    // mapuje i pokazuje całą tablicę postów oraz na klika wrzucam nowy post
    <>
      <Tilediv>React Query</Tilediv>
      <div>
        {postsQuery.data?.map((post) => (
          <TextInfo key={post.id}>{post.title}</TextInfo>
        ))}
      </div>
      <ButtonStyled
        type="button"
        disabled={newPostsMutation.isLoading}
        onClick={() => {
          newPostsMutation.mutate("new Post");
        }}
      >
        Add new post by React Query
      </ButtonStyled>
      <Informator />
    </>
  );
};

export default Query;
