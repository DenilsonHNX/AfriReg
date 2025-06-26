import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";

function InserNumber() {
  const navigate = useNavigate();

  function navigateQuit() {
    navigate("/");
  }
  function navigateTryAgain() {
    navigate("/BeforeCamera");
  }

  return (
    <div className="relative h-screen overflow-hidden bg-[#2B2B2D] flex items-center justify-center text-center">
      <div className="z-10">
        <h1 className="text-xl text-white mb-4 mt-10 font-semibold">
          DADOS REJEITADOS!
        </h1>

        <div className="flex flex-row items-center gap-4 mb-8 mt-4 justify-center">
          <button
            onClick={() => navigateQuit()}
            className="px-10 py-2 bg-[#862F72] text-white rounded-xl"
          >
            <b className="text-[#27B1B1]">CANCELAR</b>
          </button>
          <button
            onClick={() => navigateTryAgain()}
            className="px-2 py-2 bg-[#27B1B1] text-white rounded-xl disabled:opacity-50"
          >
            <b className="text-[#862F72]">TENTE NOVAMENTE</b>
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
