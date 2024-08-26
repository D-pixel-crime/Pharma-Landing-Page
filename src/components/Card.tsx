"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface cardProps {
  count: Number;
}

const Card = ({ count }: cardProps) => {
  const [isEvenRow, setIsEvenRow] = useState(false);

  useEffect(() => {
    if ((Number(count) - 1) % 6 === 0) setIsEvenRow(true);
    else if ((Number(count) - 2) % 6 === 0) setIsEvenRow(true);
    else if ((Number(count) - 3) % 6 === 0) setIsEvenRow(true);
  }, []);

  return (
    <div
      className={`flex flex-col border-2 ${
        isEvenRow ? "sm:border-[#28E3E9]" : "sm:shadow-md sm:shadow-black/20"
      } rounded-tl-3xl rounded-br-3xl pt-4  ${
        Number(count) % 2 !== 0
          ? "max-sm:border-[#28E3E9]"
          : "max-sm:shadow-sm max-sm:shadow-black/20"
      } `}
    >
      <div className="w-full flex flex-col gap-5 border-b-2 border-[#28E3E9] pb-4">
        <div className="flex justify-start px-4">
          <span className="text-[#A10C0C] text-xs flex items-center justify-between gap-1.5 rounded-full bg-[#A10C0C0D] px-2">
            <div className="rounded-full h-[4px] w-[4px] bg-[#A10C0C]" />
            nicht lieferbar
          </span>
        </div>
        <div className="flex-center">
          <Image
            src={"/bottle.png"}
            alt="bottle"
            width={100}
            height={100}
            className="flex-center"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col bg-[#62C3C6]/30 p-4 rounded-br-3xl gap-4">
        <div className="text-[#365758] bg-[#62C3C6]/40 px-1 py-0.5 font-medium rounded w-fit text-xs flex-center">
          Canify
        </div>
        <div className="flex items-center gap-2 justify-evenly w-full">
          <div className="bg-white rounded px-1 py-0.5 flex-center text-xs text-[#116A6C] w-full">
            THC 18%
          </div>
          <div className="bg-[#62C3C6] text-[#FCFCFA] rounded text-xs flex-center px-1 py-0.5 w-full">
            CBD &lt;1%
          </div>
          <Image
            src={"/flower.svg"}
            alt="flower"
            width={18}
            height={18}
            priority
          />
        </div>
        <div className="break-words text-[#116A6C] font-semibold text-base">
          Cannabis Flos 18/1 PT Mango
        </div>
        <div className="flex flex-col text-[#365758] text-xs my-2">
          <div className="flex justify-between items-center">
            <span>Kultivar</span>
            <span>Mango</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Genetik</span>
            <span>Hybrid</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex-center text-xl gap-1.5">
              <span className="text-[#62C3C6] font-bold">€</span>
              <span className="text-[#116A6C] font-extrabold">
                11,66<sup className="text-xs">1</sup>
              </span>
            </div>
            <span className="text-[#365758] text-[0.5rem]">pro Gramm</span>
          </div>
          <div className="rounded-tl-2xl rounded-br-2xl text-[#045A5C] bg-[#ECFEAA] flex-center px-3 py-1 text-xs">
            in den Warenkorb
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
