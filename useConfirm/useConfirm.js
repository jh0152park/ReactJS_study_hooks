export const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") {
    return;
  }

  const confrimAction = () => {
    if (confirm(message)) {
      callback();
    }
  };

  return confrimAction;
};
