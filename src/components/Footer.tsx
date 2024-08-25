"use client";

const Footer = () => {
  return (
    <div
      className="w-full bg-[#1A8D91] left-0 bottom-0 right-0 flex justify-center gap-32 py-8"
      style={{
        borderRadius: "30px 30px 0px 0px",
        boxShadow: "0px 0px 20px rgba(7, 64, 64, 0.05)",
      }}
    >
      <div className="flex flex-col justify-end gap-2 text-white/50 text-xs">
        <span>AGB</span>
        <span>Impressum</span>
        <span>Datenschutz</span>
      </div>
      <div className="flex flex-col gap-5 text-sm font-light text-white">
        <div className="flex gap-8">
          <div className="flex-center gap-1 hover:cursor-pointer hover:text-white/50 w-fit transition">
            <span className="footer-leaf" />
            Rezept einlösen
          </div>
          <div className="flex-center gap-1 hover:cursor-pointer hover:text-white/50 w-fit transition">
            <span className="footer-leaf" />
            Live Bestand
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex-center gap-1 hover:cursor-pointer hover:text-white/50 w-fit transition">
            <span className="footer-leaf" />
            Videosprechstunde
          </div>
          <div className="flex-center gap-1 hover:cursor-pointer hover:text-white/50 w-fit transition">
            <span className="footer-leaf" />
            FAQs
          </div>
          <div className="flex-center gap-1 hover:cursor-pointer hover:text-white/50 w-fit transition">
            <span className="footer-leaf" />
            Kontakt
          </div>
        </div>
      </div>
      <div className="flex gap-10 items-start">
        <div className="flex flex-col justify-start text-sm gap-3">
          <span className="text-xs text-white/50">Standort</span>
          <span className="flex flex-col text-white font-semibold">
            Bergstraße 49 - 57
            <span>69469 Weinheim</span>
            (3 Glocken Quartier)
          </span>
        </div>
        <div className="flex flex-col justify-start text-sm gap-3">
          <span className="text-xs text-white/50">Telefon</span>
          <span className="text-white font-semibold">0223 545 5250</span>
        </div>
        <div className="flex flex-col justify-start text-sm gap-3">
          <span className="text-xs text-white/50">Öffnungszeiten</span>
          <span className="flex flex-col text-white font-semibold">
            <span className="text-xs text-white/50">Mo-Fr</span>
            <span>09:00 – 18:00 Uhr</span>
          </span>
          <span className="flex flex-col text-white font-semibold">
            <span className="text-xs text-white/50">Sa</span>
            <span>09:00 – 14:00 Uhr</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
