import { useDiaryContext } from "contexts/diary";
import { getGradient } from "services/diary";
import { ReactChildren } from "types";

interface LayoutProps extends ReactChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { selectedDay } = useDiaryContext();

  return (
    <div
      className={`flex justify-center items-center w-full h-full overflow-hidden bg-gradient-to-b ${getGradient(
        selectedDay
      )}`}
    >
      {children}
    </div>
  );
};

export default Layout;
