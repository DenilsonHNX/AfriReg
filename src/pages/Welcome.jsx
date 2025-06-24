import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    function navigateInsertNumber() {
        navigate("/InsertNumber");
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
        <h1 className="text-3xl text-white font-bold mb-4">
          A <b>AFRIREG</b> DÁ-LHE AS BOAS VINDAS!
        </h1>
        <h2 className="text-lg p-2 text-gray-200 mb-8">
          Seu número é o primeiro passo. Registre agora!
        </h2>
        <button onClick={() => navigateInsertNumber()} className="px-6 py-2 bg-[#862F72] text-white rounded-2xl hover:bg-[#27B1B1] transition duration-300">
          <ArrowRight color="white" />
        </button>
        
      </div>
    </div>
  );
};

export default Welcome;
