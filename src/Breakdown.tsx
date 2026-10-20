import { AbsoluteFill, useCurrentFrame } from "remotion";
import { FilmShot } from "./FilmShot";
export const Breakdown = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        translate: `${Math.sin(f * 1.7) * 1.8}px ${Math.cos(f * 1.4) * 1.2}px`,
      }}
    >
      <FilmShot panel={4} duration={5.5} mono />
    </AbsoluteFill>
  );
};
