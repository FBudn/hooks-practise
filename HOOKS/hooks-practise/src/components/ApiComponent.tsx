/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ButtonStyled, Input, TextInfo } from "../styles/styles";

const ApiComponent = () => {
  const queryClient = useQueryClient();

  const [countryWriten, setCountryWriten] = useState("");
  const handleInputCountry = (e: any) => {
    setCountryWriten(e.target.value);
  };

  const [countryFetched, setCountryFetched] = useState("");

  const [capitalWriten, setCapitalWriten] = useState("");
  const [capitalFetched, setCapitalFetched] = useState("");

  const handleInputCapital = (e: any) => {
    setCapitalWriten(e.target.value);
  };

  const url = `https://restcountries.com/v3.1/all?fields=name,name`;

  const handleCountry = async () => {
    const urlCountry = `https://restcountries.com/v3.1/name/${countryWriten}?fullText=true`;
    try {
      await axios.get(urlCountry).then((response) => {
        setCountryFetched(response.data[0].name.common);
      });
    } catch (err) {
      setCountryFetched(`Wrong country name`);
    }
  };

  const handleCapital = async () => {
    const urlCapital = `https://restcountries.com/v3.1/capital/${capitalWriten}`;
    try {
      await axios.get(urlCapital).then((response) => {
        setCapitalFetched(response.data[0].capital);
      });
    } catch (err) {
      setCapitalFetched(`Wrong capital name`);
    }
  };
  /* const countriesQuery = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      await axios.get(url).then((response) => {
        return response.data;
      });
    },
  });

   dodatkowe opcje, sprawdzanie różnych stanów
  if (postsQuery.isLoading) return <h1> Loading... </h1>;
  if (newPostsMutation.isLoading) return <h1> Loading... </h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  */
  return (
    <>
      <TextInfo>API component</TextInfo>
      <TextInfo>Country: </TextInfo>
      <Input
        type="text"
        onChange={handleInputCountry}
        placeholder="Write country name ex. Poland"
      />
      <ButtonStyled onClick={handleCapital}>Find capital</ButtonStyled>
      <TextInfo>Capital city: {capitalFetched}</TextInfo>
      <Input
        type="text"
        onChange={handleInputCapital}
        placeholder="Write capital name ex. Warsaw"
      />
      <ButtonStyled onClick={handleCountry}>Find country</ButtonStyled>
      <TextInfo>Country: {countryFetched}</TextInfo>
    </>
  );
};

export default ApiComponent;
