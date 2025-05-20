import { useEffect } from "react";
import lottie from "lottie-web";
import { useNavigate } from "react-router-dom";

export const AstronautAnim = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: document.getElementById("animation-container"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "AstroAnimation.json",
    });

    // Cleanup function to destroy the animation instance
    return () => {
      animationInstance.destroy();
    };
  }, []);

  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <div>
      <div
        id="animation-container"
        className="container mx-auto w-200 h-200"
      ></div>
      <button
        onClick={handleGoHome}
        className="cosmic-button justify-center gap-2"
      >
        Back to safety
      </button>
    </div>
  );
};
