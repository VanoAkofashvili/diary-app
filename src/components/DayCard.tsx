import { Day } from "types";
import Rate from "./Rate";

interface DayCardProps {
  onClick: () => void;
  day: Day;
}

const DayCard: React.FC<DayCardProps> = ({
  day: { date, description, rate },
  onClick,
}) => (
  <div
    className="w-48 h-28 bg-white flex flex-col justify-between flex-shrink-0 px-3 py-1 border-2 border-blue-500 rounded-2xl"
    onClick={onClick}
  >
    <div>
      <span>{date}</span>
      <p className="truncate">{description}</p>
    </div>
    {rate && <Rate>{rate}</Rate>}
  </div>
);

export default DayCard;
