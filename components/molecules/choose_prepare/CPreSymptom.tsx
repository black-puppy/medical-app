import React, { useEffect, useState } from "react";
import PInfoCheckboxItem from "../p_information/PInfoCheckboxItem";
import { FilterProps } from "../../../type/FilterProps";

interface ISymptom {
  reseted: boolean
  filterObject: object;
  setFilterObject: (value: FilterProps) => void;
  list: any
}

const CPreSypmtomCheckList: React.FC<ISymptom> = ({
  filterObject,
  setFilterObject,
  list,
  reseted
}) => {
  const len = list?.length;

  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    Array(len ?? 31).fill(false)
  );
  const [visibleCount, setVisibleCount] = useState<number>(6);
  useEffect(() => {
    setCheckedStates(Array(len ?? 31).fill(false));
  }, [reseted])
  const handleCheckboxChange = (index: number) => {
    const newState = checkedStates.map((state, i) => (i === index ? !state : state));
    setCheckedStates(newState);

    let checkedSypmt: Array<string> = [];
    list?.forEach((p: string, i: number) => {
      if (newState[i]) {
        checkedSypmt.push(p);
      }
    });

    setFilterObject({ ...filterObject, checkedSymptoms: checkedSypmt });

  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => (prevCount === 6 ? len : 6));
  };


  return (
    <>
      {list?.slice(0, visibleCount).map((p: string, index: number) => (
        <PInfoCheckboxItem
          key={index}
          content={p}
          onChange={() => handleCheckboxChange(index)}
          disabled={false}
          checked={checkedStates[index]}
          style={{ opacity: 1 }}
        />
      ))}
      <span
        onClick={handleShowMore}
        className="cursor-pointer text-custom-purple decoration-custom-purple underline"
      >
        {visibleCount === 6 ? "mehr anzeigen" : "weniger anzeigen"}
      </span>
    </>
  );
};

export default CPreSypmtomCheckList;
