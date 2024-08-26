"use client";

import { Move, MoveRight, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex flex-col gap-10">
      <div className="lg:flex max-lg:grid grid-cols-6 lg:gap-10 md:gap-5 md:text-sm">
        <form
          action="post"
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-between col-start-1 col-span-2 items-center text-slate-500 px-4 py-1 rounded-full"
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
        </form>
        <div className="flex-center gap-1 text-[#045A5C] font-bold hover:-translate-y-[5%] transition hover:cursor-pointer hover:text-slate-400">
          <div className="nav-active-leaf" />
          Rezept einlösen
        </div>
        <div className="flex-center gap-1 text-[#045A5C] hover:-translate-y-[5%] transition hover:cursor-pointer hover:text-slate-400">
          <div className="nav-inactive-leaf" />
          Live Bestand
        </div>
        <div className="flex-center gap-1 text-[#045A5C] hover:-translate-y-[5%] transition hover:cursor-pointer hover:text-slate-400">
          <div className="nav-inactive-leaf" />
          Videosprechstunde
        </div>
        <div className="flex-center gap-1 text-[#045A5C] hover:-translate-y-[5%] transition hover:cursor-pointer hover:text-slate-400">
          <div className="nav-inactive-leaf" />
          FAQs
        </div>
        <div className="flex-center md:justify-start md:col-start-5 gap-1 text-[#045A5C] hover:-translate-y-[5%] transition hover:cursor-pointer hover:text-slate-400">
          <div className="nav-inactive-leaf" />
          Kontakt
        </div>
        <div className="flex-center gap-7 col-start-6 max-lg:justify-end">
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-fit text-[#28E3E9]" />
            <p className="cart-subscript flex-center text-xs">1</p>
          </div>
          <button
            onClick={(e) => e.preventDefault()}
            className="register rounded-tl-3xl rounded-br-3xl text-[#045A5C] bg-[#ECFEAA] flex-center px-3 py-0.5 hover:scale-105 hover:-translate-y-1 transition-transform"
          >
            Anmelden
          </button>
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <div className="flex-center gap-4 text-sm">
          <span className="text-[#56cdd2]">Home</span>
          <MoveRight className="w-fit text-[#28E3E9]" width={15} />
          <span className="text-[#56cdd2]">Livebestand</span>
          <MoveRight className="w-fit text-[#28E3E9]" width={15} />
          <span className="text-[#116A6C] font-bold">Cannabis Blüten</span>
        </div>
        <div className="flex flex-col text-xs gap-2 text-[#045A5C]">
          GKV mit Kostenübernahme?
          <button
            onClick={(e) => e.preventDefault()}
            className="rounded-tl-2xl rounded-br-2xl border-2 border-[#28E3E9] flex-center px-3 py-1 hover:bg-[#28E3E9] hover:text-white"
          >
            Preisoptionen
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
