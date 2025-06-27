import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const base64ToBlob = (base64) => {
  const byteString = atob(base64.split(",")[1]);
  const mimeString = base64.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
};

function AnalizeData() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [sucess, setSucess] = useState(null);

  useEffect(() => {
    const comparePhotos = async () => {
      const idPhoto = localStorage.getItem("fotoBI");
      const facePhoto = localStorage.getItem("fotoFace");

      if (!idPhoto || !facePhoto || typeof idPhoto !== "string" || typeof facePhoto !== "string") {
        setError("Fotos não encontradas ou inválidas.");
        return;
      }

      const formData = new FormData();
      formData.append("bi", base64ToBlob(idPhoto), "bi.jpg");
      formData.append("selfie", base64ToBlob(facePhoto), "selfie.jpg");

      try {
        const response = await fetch("http://localhost:8000/verificar", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Erro na resposta da API: ${response.status}`);
        }

        const result = await response.json();

        if (result.sucesso && result.status === "APROVADO") {
          setSucess("AS FOTOGRAFIAS FORAM APROVADAS!");

          // ⬇️ Armazenar os dados extraídos no localStorage
          localStorage.setItem("nome", result.nome || "");
          localStorage.setItem("numero_bi", result.numero_bi || "");
          localStorage.setItem("data_nascimento", result.data_nascimento || "");

          // ⬇️ Ir para tela de visualização dos dados
          setTimeout(() => {
            navigate("/AnalizedData");
          }, 1000);
        } else {
          setError("AS FOTOGRAFIAS NÃO FORAM APROVADAS!");
          setTimeout(() => {
            navigate("/NotConfirmed");
          }, 1000);
        }
      } catch (error) {
        setError("Erro ao processar as imagens. Tente novamente.");
        console.error("Erro ao enviar imagens:", error);
      }
    };

    const timer = setTimeout(() => {
      comparePhotos();
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative h-screen overflow-hidden bg-[#2B2B2D] flex flex-col items-center justify-center text-center">
      {/* Faixas decorativas */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#2ECBD1]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 2%, 0 50%)" }} />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#862F72]" style={{ clipPath: "polygon(0 55%, 100% 5.5%, 100% 2%, 0 50%)" }} />
      
      <div className="z-10 flex flex-col items-center justify-center" aria-live="polite">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : sucess ? (
          <p className="text-green-500 text-xl">{sucess}</p>
        ) : (
          <>
            <h1 className="text-xl text-white mb-4 mt-10 font-semibold">ANALISANDO OS DADOS</h1>
            <div className="w-16 h-16 border-4 border-t-[#862F72] border-b-[#2ECBD1] border-l-white border-r-white rounded-full animate-spin" />
            <p className="text-gray-300 mt-6">Por favor, aguarde...</p>
          </>
        )}
      </div>
    </div>
  );
}

export default AnalizeData;
