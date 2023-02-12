import { DEBOUNCE_TIME } from "config";
import debounce from "lodash.debounce";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Day, ID, Modifier, ReactChildren, SelectedDay } from "types";

export interface ContextState {
  history: Day[];
  onEdit: Modifier<Day>;
  selectDay: Modifier<ID>;
  selectedDay: SelectedDay;
  isEditing: boolean;
}

interface DiaryProviderProps extends ReactChildren {
  history: Day[];
  syncData: Modifier<Day[]>;
}

const DiaryContext = createContext<ContextState | null>(null);

const DiaryProvider: React.FC<DiaryProviderProps> = ({
  children,
  syncData,
  history,
}) => {
  const [historyList, setHistoryList] = useState(history);
  const [selectedDayId, setSelectedDay] = useState<null | ID>(null);

  const onEdit = useCallback(
    debounce((updated: Day) => {
      // Update state locally (1)
      setHistoryList((s0) =>
        s0.map((curr) => (curr.id === updated.id ? updated : curr))
      );
    }, DEBOUNCE_TIME),
    []
  );

  useEffect(() => {
    // Sync data to external source (2)
    syncData(historyList);
  }, [historyList]);

  const value = useMemo(
    () => ({
      onEdit,
      selectedDay: historyList.find((day) => day.id === selectedDayId)!,
      history: historyList,
      selectDay: (id: ID) => setSelectedDay(id),
      isEditing: selectedDayId !== null,
    }),
    [historyList, selectedDayId, onEdit]
  );

  return (
    <DiaryContext.Provider value={value}>{children}</DiaryContext.Provider>
  );
};

export default DiaryProvider;

export const useDiaryContext = () => {
  const value = useContext(DiaryContext);
  if (!value) {
    throw new Error("useDiaryContext must be used within DiaryProvider");
  }

  return value;
};
