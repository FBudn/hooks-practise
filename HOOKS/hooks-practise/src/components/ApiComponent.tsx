/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { TextInfo } from "../styles/styles";

const ApiComponent = () => {
  const queryClient = useQueryClient();

  const url = `https://restcountries.com/v3.1/all?fields=name,name`;

  const countriesQuery = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      await axios.get(url).then((response) => {
        console.log(response.data);
      });
    },
  });

  /* dodatkowe opcje, sprawdzanie różnych stanów
  if (postsQuery.isLoading) return <h1> Loading... </h1>;
  if (newPostsMutation.isLoading) return <h1> Loading... </h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  */
  return (
    <>
      <TextInfo>API component</TextInfo>
      <TextInfo>Country: </TextInfo>
      <TextInfo>Capital city: </TextInfo>
    </>
  );
};

export default ApiComponent;
