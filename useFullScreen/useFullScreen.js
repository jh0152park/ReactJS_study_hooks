export const useFullScreen = () => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current.requestFullscreen) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      element.current.mozRequestFullScreen();
    } else if (element.current.webkitRequestFullscreen) {
      element.current.webkitRequestFullscreen();
    } else if (element.current.msRequestFullscreen) {
      element.current.msRequestFullscreen();
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
  };

  return { element, triggerFull, exitFull };
};
