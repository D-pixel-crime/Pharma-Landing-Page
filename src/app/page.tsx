"use client";

import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-${
        isLoaded ? "between" : "center"
      }`}
    >
      {isLoaded ? (
        <>
          <div className="flex flex-col items-center px-24 py-10 gap-10">
            <Header />
            <Body />
          </div>
          <Footer />
        </>
      ) : (
        <div className="flex-center w-screen h-screen bg-slate-200">
          <DNA
            visible={true}
            height="100"
            width="100"
            ariaLabel="tail-spin-loading"
          />
        </div>
      )}
    </main>
  );
}
