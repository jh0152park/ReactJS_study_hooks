export const usePageLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  const handle = () => {
    onBefore();
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
