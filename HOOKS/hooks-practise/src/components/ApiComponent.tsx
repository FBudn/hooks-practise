/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ButtonStyled, Input, TextInfo } from "../styles/styles";

const ApiComponent = () => {
  const queryClient = useQueryClient();

  // state zapisujący dane z inputa "write country"
  const [countryWriten, setCountryWriten] = useState("");
  // "zbieranie" wpisanych do inputa "write country" liter i zapisywanie danych w countryWriten
  const handleInputCountry = (e: any) => {
    setCountryWriten(e.target.value);
  };
  // dodatkowy stan żeby nie wyświetlać tego samego co wpisuje w inputa jako wynik fetchowania country
  const [countryFetched, setCountryFetched] = useState("");

  // state zapisujący dane z inputa "write capital"
  const [capitalWriten, setCapitalWriten] = useState("");
  // dodatkowy stan żeby nie wyświetlać tego samego co wpisuje w inputa jako wynik fetchowania capital
  const [capitalFetched, setCapitalFetched] = useState("");

  // "zbieranie" wpisanych do inputa "write capital" liter i zapisywanie danych w capitalWriten
  const handleInputCapital = (e: any) => {
    setCapitalWriten(e.target.value);
  };

  // const url = `https://restcountries.com/v3.1/all?fields=name,name`;

  // funkcja do buttona pobierająca dane na klika
  // uzupełniam url do API wartością wpisaną z inputa "write country" czyli stanem "countryWriten"
  // dane z urla ustawiam jako dodatkowy stan "countryFetched" żeby wyświetlić odpowiednią stolicę
  const handleCapital = async () => {
    const urlCountry = `https://restcountries.com/v3.1/name/${countryWriten}?fullText=true`;
    try {
      await axios.get(urlCountry).then((response) => {
        setCapitalFetched(response.data[0].capital);
      });
    } catch (err) {
      setCapitalFetched(`Wrong country name`);
    }
  };

  const handleCountry = async () => {
    const urlCapital = `https://restcountries.com/v3.1/capital/${capitalWriten}`;
    try {
      await axios.get(urlCapital).then((response) => {
        setCountryFetched(response.data[0].name.common);
      });
    } catch (err) {
      setCountryFetched(`Wrong capital name or it is not capital`);
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
      <Input
        type="text"
        onChange={handleInputCountry}
        placeholder="Write country name ex. Poland"
      />
      <ButtonStyled onClick={handleCapital}>Find capital city</ButtonStyled>
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
