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

  // opóźnienie oparte na obietnicy
  const wait = async (duration: any) => {
    await new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  };

  // tu cały useQuery
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      await wait(1000).then(() => [...POSTS]);
      return [...POSTS];
    }, // opóźniam "pobieranie" danych z tablicy POSTS
  });

  // dorzucanie kolejnego postu do tablicy
  const newPostsMutation = useMutation({
    mutationFn: async (title: any) => {
      await wait(1000).then(() =>
        POSTS.push({ id: crypto.randomUUID(), title }),
      );
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries(["posts"])
        .then((response) => response)
        .catch((error) => error);
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
        {postsQuery?.data?.map((post: any) => (
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
