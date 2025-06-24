import { useNavigate } from "react-router-dom";

export default function CaptureID() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1b1b1f] text-white px-6">
      <p className="text-center mb-6">Tire fotografia do Bilhete de Identidade</p>
      <div className="flex gap-4">
        <button onClick={() => navigate("/verify-code")} className="bg-fuchsia-700 px-6 py-2 rounded text-white">
          VOLTAR
        </button>
        <button onClick={() => navigate("/camera")} className="bg-cyan-500 px-6 py-2 rounded text-white">
          TIRAR FOTO
        </button>
      </div>
    </div>
  );
}
