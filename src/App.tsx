import Layout from "components/Layout";
import EditDay from "components/EditDay";
import DayCard from "components/DayCard";
import { formatDate } from "services/date";
import { useDiaryContext } from "contexts/diary";

function App() {
  const { history, isEditing, selectDay, onEdit, selectedDay } =
    useDiaryContext();

  return (
    <Layout>
      <div className="w-full flex flex-col justify-center items-center h-1/2">
        {isEditing && (
          <EditDay key={selectedDay!.id} day={selectedDay!} onEdit={onEdit} />
        )}
        <div className="flex w-full p-2 md:w-3/4  gap-5 overflow-x-auto mt-auto">
          {history.map(({ date, ...day }) => (
            <DayCard
              day={{ ...day, date: formatDate(date) }}
              key={day.id}
              onClick={() => selectDay(day.id)}
            />
          ))}
          <DayCard
            day={{ date: "ხვალ", description: "", id: "" }}
            onClick={() => {}}
          />
        </div>
      </div>
    </Layout>
  );
}

export default App;
