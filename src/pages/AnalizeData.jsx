import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Função para converter Base64 para Blob
const base64ToBlob = (base64) => {
  const byteString = atob(base64.split(',')[1]);
  const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
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

      console.log("fotoBI (base64, início): ", idPhoto.slice(0, 100));
      console.log("fotoFace (base64, início): ", facePhoto.slice(0, 100));

      const formData = new FormData();
      formData.append("bi", base64ToBlob(idPhoto), "bi.jpg");
      formData.append("selfie", base64ToBlob(facePhoto), "selfie.jpg");

      try {
        const response = await fetch("http://localhost:8000/verificar", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Erro na resposta da API: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();

        if (result.sucesso && result.status === "APROVADO") {
          setSucess("AS FOTOGRAFIAS FORAM APROVADAS!");
          setTimeout(() => {
            navigate("/CameraBi");
          }, 500); 
        } else {
          setError("AS FOTOGRAFIAS NÃO FORAM APROVADAS!");
          setTimeout(() => {
            navigate("/NotConfirmed");
          }, 500);
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
      {/* Faixa azul */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-[#2ECBD1]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 2%, 0 50%)" }}
      ></div>

      {/* Faixa roxa */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-[#862F72]"
        style={{ clipPath: "polygon(0 55%, 100% 5.5%, 100% 2%, 0 50%)" }}
      ></div>

      <div className="z-10 flex flex-col items-center justify-center" aria-live="polite">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : sucess ? (
          <p className="text-green-500 text-xl">{sucess}</p>
        ) : (
          <>
            <h1 className="text-xl text-white mb-4 mt-10 font-semibold">
              ANALISANDO OS DADOS
            </h1>
            <div
              className="w-16 h-16 border-4 border-t-[#862F72] border-b-[#2ECBD1] border-l-white border-r-white rounded-full animate-spin"
              aria-label="Carregando"
            ></div>
            <p className="text-gray-300 mt-6">Por favor, aguarde...</p>
          </>
        )}
      </div>
    </div>
  );
}

export default AnalizeData;