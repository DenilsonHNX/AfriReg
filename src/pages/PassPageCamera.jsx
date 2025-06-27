import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PassPageCamera() {
  const navigate = useNavigate();

  function navigateVerifyCode() {
    navigate("/CameraBiBack");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateVerifyCode();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-[#2B2B2D] flex items-center justify-center text-center">
      <div className="z-10">
        <h1 className="text-xl text-white mb-4 mt-10 font-semibold">
          TIRA FOTOGRAFIA DA PARTE TRASEIRA DO BILHETE DE IDENTIDADE
        </h1>

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

export default PassPageCamera;