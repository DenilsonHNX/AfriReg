import "react-phone-number-input/style.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function InserNumber() {
  const navigate = useNavigate();

  function navigateBeforeCamera() {
    navigate("/BeforeCamera");
  }


  return (
    <div className="relative h-screen overflow-hidden bg-[#2B2B2D] flex items-center justify-center text-center">
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-[#2ECBD1]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 2%, 0 50%)",
        }}
      ></div>

      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-[#862F72]"
        style={{
          clipPath: "polygon(0 55%, 100% 5.5%, 100% 2%, 0 50%)",
        }}
      ></div>
      <div className="z-10">
        <label className="text-xl text-white mb-4 mt-10 block">
          DIGITE O SEU NOME COMPLETO IGUAL AO DO BILHETE DE IDENTIDADE
        </label>

        <div className="flex justify-center gap-4 mb-6">
          <input className="w-[60%] pb-2 text-black rounded-md" type="text" />  
          
        </div>

        <div className="flex flex-row items-center gap-4 mb-8 mt-4 justify-center">
          <button className="px-10 py-2 bg-[#862F72] text-white rounded-xl">
            <b className="text-[#27B1B1]">VOLTAR</b>
          </button>
          <button
            onClick={() => navigateBeforeCamera()}
            className="px-10 py-2 bg-[#27B1B1] text-white rounded-xl disabled:opacity-50"
          >
            <b className="text-[#862F72]">CONTINUAR</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InserNumber;
