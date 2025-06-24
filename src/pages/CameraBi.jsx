import { Camera, ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function CameraPageBi() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [fotoBase64, setFotoBase64] = useState(null);
  const [facingMode, setFacingMode] = useState("user"); // "user" = frontal

  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode } })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Erro ao acessar a câmera:", err);
      });
  };

  useEffect(() => {
    startCamera();
    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [facingMode]);

  const handleCameraClick = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/jpeg");
    setFotoBase64(imageData);
    setMostrarConfirmacao(true);
  };

  const handleAceitar = () => {
    if (fotoBase64) {
      localStorage.setItem("fotoBI", fotoBase64);
    }
    setMostrarConfirmacao(false);
    navigate("/CameraFace");
  };

  const handleRepetir = () => {
    setFotoBase64(null);
    setMostrarConfirmacao(false);
  };

  const handleSwitchCamera = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  return (
    <div className="relative flex flex-col items-center justify-between h-screen px-4 py-8 overflow-hidden">
      {/* Vídeo da câmera ao fundo */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Camada escura sobre o vídeo */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-0" />

      {/* Canvas oculto para capturar a imagem */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Conteúdo principal (div cinza central) */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">
        <div className="w-[90%] h-[90%] bg-gray-600 bg-opacity-30 rounded-2xl" />

        <div className="relative w-full mt-6">
          <ArrowLeft
            onClick={() => navigate("/InsertNumber")}
            size={40}
            color="#fff"
            className="absolute left-10 top-1/2 -translate-y-1/2 cursor-pointer"
          />

          <div className="flex justify-center items-center gap-x-8">
            <Camera
              size={50}
              color="#fff"
              className="cursor-pointer"
              onClick={handleCameraClick}
            />
          </div>
        </div>
      </div>

      {/* Modal de confirmação com preview */}
      {mostrarConfirmacao && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center opacity-95">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              DESEJA USAR ESTA FOTOGRAFIA?
            </h2>

            {fotoBase64 && (
              <div className="w-full h-60 mb-4">
                <img
                  src={fotoBase64}
                  alt="Foto capturada"
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex justify-center gap-4">
              <button
                onClick={handleRepetir}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                TIRAR NOVAMENTE
              </button>
              <button
                onClick={handleAceitar}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                ACEITAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CameraPageBi;
