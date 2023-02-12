import Rates from "./Rates";
import { Day } from "types";
import { formatDate } from "services/date";
import { useEffect, useState } from "react";
import { ContextState } from "contexts/diary";

interface EditDayProps {
  day: Day;
  onEdit: ContextState["onEdit"];
}

const EditDay: React.FC<EditDayProps> = ({ day, onEdit }) => {
  const [changes, setChanges] = useState(day);

  useEffect(() => {
    // Prevent update on initial render
    if (changes === day) return;
    onEdit(changes);
  }, [changes, onEdit, day]);

  return (
    <form className="bg-white border-2 border-blue-500 px-7 py-4 w-96 flex flex-col gap-3 rounded-3xl shadow-xl">
      <h4>{formatDate(day.date)}</h4>
      <textarea
        className="w-full p-1 max-h-20"
        value={changes.description}
        onChange={({ target }: any) =>
          setChanges({
            ...changes,
            description: target.value,
          })
        }
      />
      <Rates
        onSelect={(rate) => setChanges({ ...changes, rate })}
        className="self-center"
      />
    </form>
  );
};

export default EditDay;
