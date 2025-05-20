import { AstronautAnim } from "../components/AstronautAnim";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const NotFound = () => {
  return (
    <div>
      <ThemeToggle />
      <StarBackground />
      <AstronautAnim />
    </div>
  );
};
