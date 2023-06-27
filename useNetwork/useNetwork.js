export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handlechange = () => {
    if (typeof onChange === "function") {
      setStatus(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handlechange);
    window.addEventListener("offline", handlechange);

    return () => {
      window.removeEventListener("online", handlechange);
      window.removeEventListener("offline", handlechange);
    };
  }, []);

  return status;
};
