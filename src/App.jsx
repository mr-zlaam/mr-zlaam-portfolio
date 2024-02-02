import { Context, Cursor, Parents } from "./05_Exporter.js";
import { useContext, useEffect } from "react";

function App() {
  const { isOnline, setIsOnline } = useContext(Context);
  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, [isOnline]);
  return (
    <>
      <Cursor />
      <Parents />
    </>
  );
}

export default App;
