"use client";

import { ChevronDown, ChevronUp, X } from "lucide-react";
import CustomSlider from "./CustomSlider";

const Sidebar = () => {
  return (
    <div className="w-1/5 flex flex-col pr-5 sm:text-xs">
      <h1 className="flex items-center gap-4 lg:text-3xl sm:text-xl text-[#116A6C] font-bold">
        <div className="Blüten" /> Blüten
      </h1>
      <div className="bg-[#62C3C6]/10 text-[#045A5C] flex-center font-bold mt-14 py-0.5 lg:text-lg sm:text-base">
        Filter
      </div>
      <div className="mt-10 flex flex-col gap-2 border-b-2 border-[#62C3C6]/30 pb-4">
        <p className="text-[#365758] flex-center font-bold lg:text-sm">Preis</p>
        <CustomSlider textSymbol="€" />
      </div>
      <div className="mt-10 flex flex-col gap-6 border-b-2 border-[#62C3C6]/30 pb-4 text-[#365758]">
        <div className="w-full flex lg:text-sm">
          <span className="5/6 w-full flex-center text-[#365758]">
            Hersteller
          </span>
          <ChevronUp className="w-1/6 flex-center text-[#62C3C6] cursor-pointer hover:text-[#62C3C6]/50 transition" />
        </div>
        <form
          className="flex flex-col gap-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="text-xs flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              id="type1"
              placeholder="Hello"
              className="border-[#62C3C6] text-[#62C3C6] accent-[#62C3C6]"
            />
            <label htmlFor="type1">ADREXpharma</label>
          </div>
          <div className="text-xs flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              id="type2"
              placeholder="Hello"
              className="border-[#62C3C6] text-[#62C3C6] accent-[#62C3C6]"
            />
            <label htmlFor="type2">Aurora</label>
          </div>
          <div className="text-xs flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              id="type3"
              placeholder="Hello"
              className="border-[#62C3C6] text-[#62C3C6] accent-[#62C3C6]"
            />
            <label htmlFor="type3">Avaay</label>
          </div>
          <div className="text-xs flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              id="type4"
              placeholder="Hello"
              className="border-[#62C3C6] text-[#62C3C6] accent-[#62C3C6]"
            />
            <label htmlFor="type4">Bedrocan</label>
          </div>
          <div className="text-xs flex items-center gap-2">
            <input
              type="checkbox"
              name="type"
              id="type5"
              placeholder="Hello"
              className="border-[#62C3C6] text-[#62C3C6] accent-[#62C3C6]"
            />
            <label htmlFor="type5">Cannamedical</label>
          </div>
        </form>
        <div className="rounded-tl-3xl rounded-br-3xl text-[#045A5C] border-2 border-[#ECFEAA] flex-center px-3 py-1 text-xs mb-4">
          mehr anzeigen
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-2 border-b-2 border-[#62C3C6]/30 pb-4">
        <p className="text-[#365758] flex-center font-bold lg:text-sm">
          THC Gehalt
        </p>
        <CustomSlider textSymbol="%" />
      </div>
      <div className="mt-10 flex flex-col gap-2 border-b-2 border-[#62C3C6]/30 pb-4">
        <p className="text-[#365758] flex-center font-bold lg:text-sm">
          CBD Gehalt
        </p>
        <CustomSlider textSymbol="%" />
      </div>
      <div className="mt-16 flex flex-col gap-2 border-b-2 border-[#62C3C6]/30 pb-4">
        <p className="text-[#365758] flex-center font-bold lg:text-sm">
          Genetik
        </p>
        <div className="lg:flex grid sm:grid-cols-2 gap-1 text-xs">
          <span className="bg-[#62C3C6] rounded px-2 py-1 w-full flex-center">
            Indica
          </span>
          <span className="bg-[#62C3C6]/30 rounded text-[#045A5C] px-2 py-1 w-full flex-center">
            Sativa
          </span>
          <span className="bg-[#62C3C6]/30 rounded text-[#045A5C] px-2 py-1 w-full flex-center">
            Hybrid
          </span>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-2 border-b-2 border-[#62C3C6]/30 pb-4">
        <p className="text-[#365758] flex-center font-bold lg:text-sm">
          Bestrahltung
        </p>
        <div className="lg:flex grid grid-cols-1 gap-1 text-xs">
          <span className="bg-[#62C3C6] rounded px-2 py-1 w-full flex-center">
            bestrahlt
          </span>
          <span className="bg-[#62C3C6]/30 rounded text-[#045A5C] px-2 py-1 w-full flex-center">
            nicht bestrahlt
          </span>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-6 border-b-2 border-[#62C3C6]/30 pb-4 text-[#365758]">
        <div className="w-full flex text-sm">
          <span className="5/6 w-full flex-center text-[#365758] lg:text-sm text-xs">
            Terpene
          </span>
          <ChevronDown className="w-1/6 flex-center text-[#62C3C6] cursor-pointer hover:text-[#62C3C6]/50 transition" />
        </div>
      </div>
      <div className="flex-center mt-10 text-xs gap-1">
        <X className="text-[#62C3C6] font-bold" width={15} />
        alle Filter zurücksetzen
      </div>
    </div>
  );
};
export default Sidebar;
