"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

interface ICPreAmount {
  herbAmount: number;
  setHerbAmount: (value: number) => void;
  selectedHerb:Product;
}
interface IHerbData {
  herbImg: string;
  herbName: string;
  herbTHC: number;
  herbCBD: number;
  herbKultivar: string;
  herbGenetik: string;
  herbPriceFrom: number;
  herbPriceTo: number;
  herbTalent: number;
  herbAmount:number;
}

interface Product {
  id: number;
  productName: string;
  thc: number;
  cbd: number;
  genetic: string;
  origin: string;
  strainName: string;
  ratingsScore: number;
  ratingsCount: number;
  minPrice: number;
  maxPrice: number;
  imgUrl: string;
  effect: string[];
  medicalUsage: string;
  terpenes: string[];
  taste: string[];
  strain: string;
  manufacturer: string;
  productClass: string;
  // herbAmount?: number;
}
const marks = [
  { value: -1, label: "0" },
  { value: 9, label: "5" },
  { value: 19, label: "10" },
  { value: 29, label: "15" },
  { value: 39, label: "20" },
  { value: 49, label: "25" },
  { value: 59, label: "30" },
  { value: 69, label: "35" },
  { value: 79, label: "40" },
  { value: 89, label: "45" },
  { value: 99, label: "50" },
];

function valuetext(value: number) {
  return `${value}`;
}

const CPreAmountRange: React.FC<ICPreAmount> = ({
  herbAmount,
  setHerbAmount,
  selectedHerb,
}) => {
  const onChangeAm = (event: Event, value: number | number[]) => {
    // Handle cases where value can be a single number or an array
    const newValue = Array.isArray(value) ? value[0] : value;
    setHerbAmount(newValue / 2);
  };
  // selectedHerb.herbAmount == herbAmount;

  return (
    <div className="w-full">

      <Box sx={{ width: '100%', }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={10}
          marks={marks}
          onChange={onChangeAm}
        />
      </Box>
    </div>
  );
};



export default CPreAmountRange;
