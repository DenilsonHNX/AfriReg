import "react-phone-number-input/style.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function InserNumber() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  const navigate = useNavigate();

  function navigateBeforeCamera() {
    navigate("/BeforeCamera");
  }

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Só aceita 1 dígito numérico
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const otpValue = otp.join("");

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
        <label htmlFor="otp" className="text-xl text-white mb-4 block">
          INSIRA O CÓDIGO DE VERIFICAÇÃO:
        </label>

        {/* Inputs OTP */}
        <div className="flex justify-center gap-4 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-2xl text-center rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#27B1B1] text-black"
            />
          ))}
        </div>

        <p className="text-cyan-600 cursor-pointer text-start mb-10 underline">
          Reenviar o código de verificação
        </p>

        <div className="flex flex-row items-center gap-4 mb-8 mt-4 justify-center">
          <button className="px-10 py-2 bg-[#862F72] text-white rounded-xl">
            <b className="text-[#27B1B1]">VOLTAR</b>
          </button>
          <button
            onClick={() => navigateBeforeCamera()}
            className="px-10 py-2 bg-[#27B1B1] text-white rounded-xl disabled:opacity-50"
            disabled={otpValue.length < 4}
          >
            <b className="text-[#862F72]">CONTINUAR</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InserNumber;
