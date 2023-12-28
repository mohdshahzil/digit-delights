import React from "react";
import Background from "./components/Backgrounnd";
import {Button} from '@nextui-org/button'; 
export default function page() {
  return (
    <>
      <Background></Background>
      <div className="text-center mt-44 p-4 ">
        <div className="md:text-7xl  text-6xl   font-extrabold md:p-4 p-3 m-2">
          From 0 to Infinity
        </div>
        <div className="md:text-5xl text-4xl font-bold  md:p-4 p-3 m-2">
          {" "}
          Where Every Number Holds a Tale of its Own.{" "}
        </div>
        <Button>click me </Button>
      </div>
    </>
  );
}
