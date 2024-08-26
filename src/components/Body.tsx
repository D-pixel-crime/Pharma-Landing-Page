"use client";

import { Switch } from "@mui/material";
import { List, MoveLeft, MoveRight, Search } from "lucide-react";
import Sidebar from "./Sidebar";
import Card from "./Card";

const Body = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="w-4/5 flex flex-col items-end gap-10">
        <div className="flex justify-end">
          <form
            action="post"
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-4 lg:text-sm sm:text-xs"
          >
            <div
              className="flex justify-between items-center text-slate-500 px-4 py-1 rounded-full"
              style={{ backgroundColor: "rgba(98, 195, 198, 0.15)" }}
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Suchen"
                className="outline-none bg-transparent"
              />
              <Search
                className="text-[#28E3E9] w-fit hover:cursor-pointer ml-2"
                height={20}
                width={20}
              />
            </div>
            <select
              name="select"
              id="select"
              className="text-[#365758] px-2 rounded-md outline-none"
              style={{
                backgroundColor: "rgba(98, 195, 198, 0.3)",
              }}
            >
              <option value="Sortieren nach">Sortieren nach</option>
              <option value="Sortieren nach">Sortieren nach</option>
            </select>
            <div
              className="text-[#365758] px-2 rounded-md flex justify-between items-center"
              style={{
                backgroundColor: "rgba(98, 195, 198, 0.3)",
              }}
            >
              Verfügbarkeit
              <Switch
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#62C3C6",
                  },
                }}
                size="small"
                className="flex-center"
              />
            </div>
            <div
              className="text-black/50 px-2 rounded-md flex justify-between items-center py-1 cursor-pointer text-[#365758]"
              style={{
                backgroundColor: "rgba(98, 195, 198, 0.3)",
              }}
            >
              <List />
            </div>
          </form>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-5">
          {Array.from({ length: 15 }).map((_, index) => (
            <Card key={index} count={index + 1} />
          ))}
        </div>
        <div className="flex items-center justify-end w-full gap-4">
          <MoveLeft className="text-[#62C3C6] font-light hover:text-[#62C3C6]/40 hover:cursor-pointer transition" />
          <span className="text-[#045A5C] font-extrabold hover:text-[#045A5C]/40 hover:cursor-pointer transition">
            1
          </span>
          <span className="text-[#045A5C] font-extrabold hover:text-[#045A5C]/40 hover:cursor-pointer transition">
            2
          </span>
          <span className="text-[#045A5C] font-extrabold hover:text-[#045A5C]/40 hover:cursor-pointer transition">
            3
          </span>
          <span className="text-[#045A5C] font-extrabold">...</span>
          <span className="text-[#045A5C] font-extrabold hover:text-[#045A5C]/40 hover:cursor-pointer transition">
            12
          </span>
          <MoveRight className="text-[#62C3C6] font-light hover:text-[#62C3C6]/40 hover:cursor-pointer transition" />
        </div>
      </div>
    </div>
  );
};
export default Body;
