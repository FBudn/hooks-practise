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

  const [capital, setCapital] = useState("");

  const handleInputCapital = (e: any) => {
    setCapital(e.target.value);
  };

  let urlCountry = `https://restcountries.com/v3.1/name/poland?fullText=true`;
  const urlCapital = `https://restcountries.com/v3.1/capital/${capital}`;
  const url = `https://restcountries.com/v3.1/all?fields=name,name`;

  const handleCountry = async () => {
    urlCountry = `https://restcountries.com/v3.1/name/${countryWriten}?fullText=true`;
    try {
      await axios.get(urlCountry).then((response) => {
        setCountryFetched(response.data[0].name.common);
      });
    } catch (err) {
      console.log(err);
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
      <ButtonStyled>Find capital</ButtonStyled>
      <TextInfo>Capital city: </TextInfo>
      <Input
        type="text"
        onChange={handleInputCapital}
        placeholder="Write capital name ex. Warsaw"
      />
      <ButtonStyled onClick={handleCountry}>Find country</ButtonStyled>
      <TextInfo>C: {countryFetched}</TextInfo>
    </>
  );
};

export default ApiComponent;
