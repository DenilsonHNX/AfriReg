import { useNavigate } from "react-router-dom";

function AnalizedData() {
  const nome = localStorage.getItem("nome") || "Nome não encontrado";
  const numeroBI = localStorage.getItem("numero_bi") || "Nº BI não encontrado";
  const dataNascimento = localStorage.getItem("data_nascimento") || "Data não encontrada";
  const navigate = useNavigate();

  function navigateVerifyCode() {
    navigate("/VerifyCode");
  }
  function navigateTryAgain() {
    navigate("/AnalizeData");
  }

  return (
    <div className="relative h-screen overflow-hidden bg-[#2B2B2D] flex items-center justify-center text-center">
      <div className="z-10 flex flex-col items-center justify-center">
        <h1 className="text-2xl text-white mb-4 mt-10 font-semibold">
          DADOS ANALISADOS E ACEITES COM SUCESSO!
        </h1>

        <div className=" flex-col bg-white text-black p-6 rounded-xl shadow-lg w-[80%] max-w-md space-y-4">
        <div>
          <strong>Nome:</strong> <span>{nome}</span>
        </div>
        <div>
          <strong>Número do BI:</strong> <span>{numeroBI}</span>
        </div>
        <div>
          <strong>Data de Nascimento:</strong> <span>{dataNascimento}</span>
        </div>
      </div>

        <div className="flex flex-row items-center gap-4 mb-8 mt-4 justify-center">
          <button
            onClick={() => navigateTryAgain()}
            className="px-10 py-2 bg-[#862F72] text-white rounded-xl"
          >
            <b className="text-[#27B1B1]">RECOMEÇAR</b>
          </button>
          <button
            onClick={() => navigateVerifyCode()}
            className="px-10 py-2 bg-[#27B1B1] text-white rounded-xl disabled:opacity-50"
          >
            <b className="text-[#862F72]">FINALIZAR</b>
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

export default AnalizedData;
