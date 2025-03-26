import { useRef, useEffect } from "react";

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!videoRef.current) return;

      switch (event.key) {
        case "f":
          // Fullscreen holatini almashtirish
          if (!document.fullscreenElement) {
            videoRef.current.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
          break;

        case " ":
          // Space bosilganda Play/Pause qilish
          event.preventDefault(); // Sahifa scrollining oldini oladi
          if (videoRef.current.paused) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
          break;

        case "ArrowRight":
          // Oldinga 5 soniya o'tkazish
          videoRef.current.currentTime += 5;
          break;

        case "ArrowLeft":
          // Orqaga 5 soniya qaytarish
          videoRef.current.currentTime -= 5;
          break;

        case "ArrowUp":
          // Ovoz balandligini oshirish
          if (videoRef.current.volume < 1) {
            videoRef.current.volume = Math.min(
              videoRef.current.volume + 0.1,
              1
            );
          }
          break;

        case "ArrowDown":
          // Ovoz balandligini kamaytirish
          if (videoRef.current.volume > 0) {
            videoRef.current.volume = Math.max(
              videoRef.current.volume - 0.1,
              0
            );
          }
          break;

        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full md:w-9/12 h-36 md:h-60 mx-auto mb-6 rounded-xl bg-amber-60"
      controls
    >
      {videoSrc ? (
        <source src={videoSrc} type="video/mp4" />
      ) : (
        <p className="text-center">Darslik hali joylanmadi</p>
      )}
    </video>
  );
};

export default VideoPlayer;
