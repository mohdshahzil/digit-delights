import React from "react";

export default function page() {
  return (
    <>
      <div className="relative h-screen w-screen  bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
          <div className="text-center md:mt-20 mt-16 ">
            <div className="md:text-7xl  text-6xl   font-extrabold md:p-4 p-3">
              From 0 to Infinity
            </div>
            <div className="md:text-5xl text-4xl font-bold  md:p-4 p-3">
              {" "}
              Where Every Number Holds a Tale of its Own.{" "}
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
