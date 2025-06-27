import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InserNumber() {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendOtp(phoneNumber) {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Navegar para a página de verificação com o número de telefone
        navigate("/VerifyCode", { state: { phoneNumber: value } });
      } else {
        setErro("Falha ao enviar OTP. Tente novamente.");
      }
    } catch (error) {
      setErro("Erro de conexão. Verifique sua internet.");
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  function navigateWelcome() {
    navigate("/");
  }

  const handleChange = (phone) => {
    setValue(phone);
    const numeroSemCodigo = phone?.replace(/^(\+244)/, "") || "";

    if (numeroSemCodigo.length >= 1 && !numeroSemCodigo.startsWith("95")) {
      setErro("O número deve começar com 95");
    } else if (numeroSemCodigo.length !== 9) {
      setErro("");
    } else {
      setErro("");
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-[#2B2B2D] flex items-center justify-center text-center">
      <div className="z-10">
        <label htmlFor="phone" className="text-xl text-white">
          INSIRA O NÚMERO DA AFRICEL ABAIXO:{" "}
        </label>

        <PhoneInput
          className="rounded-md px-20 h-10 mt-4 text-center text-black"
          defaultCountry="AO"
          placeholder="  95X XXX XXX"
          value={value}
          onChange={handleChange}
        />

        {erro && <p className="text-red-500 mt-2">{erro}</p>}

        <div className="flex flex-row items-center gap-4 mb-8 mt-4 justify-center">
          <button
            onClick={() => navigateWelcome()}
            className="px-10 py-2 bg-[#862F72] text-white rounded-xl"
          >
            <b className="text-[#27B1B1]">VOLTAR</b>
          </button>
          <button
            onClick={() => sendOtp(value)}
            className="px-10 py-2 bg-[#27B1B1] text-white rounded-xl disabled:opacity-50"
            disabled={!!erro || !value || loading}
          >
            {loading ? (
              "ENVIANDO..."
            ) : (
              <b className="text-[#862F72]">CONTINUAR</b>
            )}
          </button>
        </div>

        {/* Camada azul */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-[#2ECBD1]"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 98%, 0 50%)",
          }}
        ></div>

        {/* Camada roxa fina */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-[#862F72]"
          style={{
            clipPath: "polygon(0 45%, 100% 95%, 100% 98%, 0 50%)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default InserNumber;