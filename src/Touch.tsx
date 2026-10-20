import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FilmShot } from "./FilmShot";
export const Touch = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill
      style={{
        filter: `grayscale(${interpolate(f, [0, fps], [0, 1], { extrapolateRight: "clamp" })})`,
      }}
    >
      <FilmShot panel={1} duration={2} />
      <AbsoluteFill
        style={{
          background: "white",
          opacity: interpolate(
            f,
            [fps, 1.3 * fps, 1.5 * fps, 2 * fps],
            [0, 0.7, 0, 0.25],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
        }}
      />
    </AbsoluteFill>
  );
};
