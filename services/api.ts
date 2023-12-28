// services/api.ts

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface GetNumberResponse {
  // Define the structure of the response data
  // Adjust this based on the actual response structure from the API
  someKey: string;
  anotherKey: number;
}

export const getNumber = async (number: number): Promise<GetNumberResponse> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `https://numbersapi.p.rapidapi.com/${number}/math`, // Use the number parameter in the URL
    params: {
      fragment: "true",
      json: "true",
    },
    headers: {
      "X-RapidAPI-Key": "19086ff6c4msh86a7304c22fba2ep1c4925jsn1ebbb5d7e53f", // Replace with your actual API key
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  try {
    const response: AxiosResponse<GetNumberResponse> = await axios.request(
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
