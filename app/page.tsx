"use client";
import React, { useState } from "react";
import { getNumber } from "../services/api";
import Background from "./components/Backgrounnd";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import Typography from "./components/Typography";
import { Card, CardBody } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";

export default function Page() {
  const [enteredNumber, setEnteredNumber] = useState<number | undefined>();
  const [apiResponse, setApiResponse] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleButtonClick = async () => {
    try {
      if (enteredNumber !== undefined) {
        setLoading(true);
        const data = await getNumber(enteredNumber);
        console.log("API Response:", data.text);
        setLoading(false);
        setApiResponse(String(data.text));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Background />
      <Typography />
      <div className="flex flex-row items-center justify-center gap-10 p-4">
        <Input
          type="number"
          label="Enter Number"
          variant="faded"
          className="max-w-xs p-4 text-xl"
          value={String(enteredNumber)}
          onChange={(e) => setEnteredNumber(Number(e.target.value))}
        />

        <Button
          size="lg"
          className="p-4 h-auto bg-black text-white"
          onClick={handleButtonClick}
        >
          {loading ? <Spinner color="default" /> : "Click"}
        </Button>
      </div>
      {apiResponse && (
        <div className="flex items-center justify-center">
          <Card className=" md:1/3 text-xl bg-transparent border ">
            <CardBody>
              <p>{apiResponse}</p>
            </CardBody>
          </Card>
        </div>
      )}
      <div className="absolute left-0 right-0 bottom-0 m-8 text-2xl font-semibold flex flex-col items-center justify-between" >Made with ❤️ by MS</div>
    </>
  );
}
