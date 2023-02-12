import { Star, Modifier, StarList } from "types";
import Rate from "./Rate";

interface RateProps {
  onSelect: Modifier<Star>;
  className?: string;
}

const Rates: React.FC<RateProps> = ({ onSelect, className = "" }) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {StarList.map((rate) => (
        <Rate key={rate} onClick={() => onSelect(rate)}>
          {rate}
        </Rate>
      ))}
    </div>
  );
};

export default Rates;
