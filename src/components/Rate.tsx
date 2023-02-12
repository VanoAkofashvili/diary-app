import { ReactChildren, Star } from "types";

interface RateProps extends ReactChildren {
  onClick?: () => void;
}

const Rate: React.FC<RateProps> = ({ children, onClick }) => (
  <div
    className="flex items-center self-end justify-center w-10 h-10 p-3 border-2 border-gray-300 rounded-full cursor-pointer"
    onClick={onClick}
  >
    {children}
  </div>
);

export default Rate;
