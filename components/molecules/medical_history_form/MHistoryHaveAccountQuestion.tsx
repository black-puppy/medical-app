"use client";

import React, { useEffect, useState } from "react";
import Radiobtn from "../../atoms/medical_history_form/Radiobtn";
import RadiobtnChecked from "../../atoms/medical_history_form/RadiobtnChecked";
import MHistoryInput from "../../atoms/medical_history_form/MHistoryInput";
import Button from "../../atoms/Button";
import MHistoryRegisteredEmailInput from "../../atoms/medical_history_form/MHistoryOnlyEmailInput";
import { useSelector } from "react-redux";

interface Props {
  setIsOne: (value: boolean) => void;
  isOne: boolean;
  isInvalidRegisteredEmail: boolean;
  setisInvalidRegisteredEmail: (value: any) => void;
  handleAlreadyAccount: () => void;
}
const MHistoryHaveAccountQuestion = ({
  setIsOne,
  isOne,
  isInvalidRegisteredEmail,
  setisInvalidRegisteredEmail,
  handleAlreadyAccount
}: Props) => {
  useEffect(() => {}, [isOne]);
  const [isSend, setIsSend] = useState();
  const registerEmail = useSelector((state: any) => state.counter.registerEmail);

  return (
    <div className="w-full h-auto md:rounded-[2.25rem] rounded-[24px] md:p-[3.125rem] p-[24px] bg-white flex -webkit-flex flex-col justify-between mx-auto mt-[40px] Myshadow">
      <p className=" text-[16px] font-normal">
        Haben Sie bereits ein Konto?
        {/* <span className="text-alert-red font-bold">*</span> */}
      </p>
      <div className="flex -webkit-flex mt-[16px]">
        <Radiobtn
          name="acc1"
          content="Ja"
          className="w-[50%]"
          onChange={() => setIsOne(true)}
        />
        <RadiobtnChecked
          name="acc1"
          className=""
          content="Nein"
          onChange={() => setIsOne(false)}
        />
      </div>
      <div
        className={`multi-select ${
          isOne ? "flex -webkit-flex flex-col mt-[24px]" : "hidden flex-col"
        }`}
      >
        <p>
          Geben Sie Ihre E-Mail-Adresse ein und erhalten Sie den Link zu einem
          vorausgefüllten Fragebogen.
        </p>
        <div className="flex -webkit-flex justify-between items-start gap-3 md:flex-row flex-col">
          <MHistoryRegisteredEmailInput
            content="E-mail"
            isInvalidRegisteredEmail={isInvalidRegisteredEmail}
            setisInvalidRegisteredEmail={setisInvalidRegisteredEmail}
          />
          <Button
            content="senden"
            onClick={handleAlreadyAccount}
            className={`${!registerEmail || (isInvalidRegisteredEmail == false) ?"disable-attr-btn":""} md:w-[139px] w-full mt-[12px] bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)] rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white`}
          />
        </div>
      </div>
    </div>
  );
};

export default MHistoryHaveAccountQuestion;
