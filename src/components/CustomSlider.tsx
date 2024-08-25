"use client";

import { Box, Slider } from "@mui/material";
import { useState } from "react";

interface props {
  textSymbol: string;
}

function valuetext(value: number) {
  return `${value}°C`;
}

const CustomSlider = ({ textSymbol }: props) => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="flex flex-col">
      <Box sx={{ width: "fit-width" }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          sx={{
            "& .MuiSlider-thumb": {
              width: "15.38px",
              height: "20px",
              backgroundColor: "#62C3C6",
              borderRadius: "15.3846px 0px",
              boxShadow: "none",
            },
            "& .MuiSlider-track": {
              backgroundColor: "#62C3C6", // Set the color of the selected range to match the thumb
            },
            // Unselected range customization (rail)
            "& .MuiSlider-rail": {
              backgroundColor: "#62C3C6", // Optionally change the unselected range color
              opacity: "30%",
            },
          }}
        />
      </Box>
      <div className="flex justify-between items-center gap-2">
        <div className="bg-[#819191]/10 w-full rounded-full px-4 py-0.5 text-xs font-medium text-[#365758]">
          {value[0]} {textSymbol}
        </div>{" "}
        -
        <div className="bg-[#819191]/10 w-full rounded-full px-4 py-0.5 text-xs font-medium text-[#365758]">
          {value[1]} {textSymbol}
        </div>
      </div>
    </div>
  );
};
export default CustomSlider;
