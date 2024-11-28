import { IconType } from "react-icons";

interface StatusProps {
  text: string;
  icon: IconType;
  bg: string; // Classe para o fundo
  color: string; // Classe para a cor do texto
}

const Status: React.FC<StatusProps> = ({ text, icon: Icon, bg, color }) => {
  return (
    <div
      className={`${bg} ${color} px-2 py-1 mt-[10px] rounded-full flex items-center gap-2 text-sm font-medium`}
    >
      {text}
      <Icon size={15} />
    </div>
  );
};

export default Status;
