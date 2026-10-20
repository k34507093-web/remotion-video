import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { FilmShot } from "./FilmShot";
export const Return = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{ translate: `${Math.sin(f * 2) * Math.max(0, 18 - f)}px 0px` }}
    >
      <FilmShot panel={5} duration={3} />
      <AbsoluteFill
        style={{
          background: "#e7eeee",
          opacity: interpolate(f, [0, 4, 8, 12], [0.9, 0, 0.45, 0], {
            extrapolateRight: "clamp",
          }),
        }}
      />
      {f < 12 && (
        <svg
          viewBox="0 0 1920 1080"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        >
          <path
            d="M960 540L300 0M960 540L1920 230M960 540L1420 1080M960 540L0 970M960 540L700 0M960 540L900 1080"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      )}
    </AbsoluteFill>
  );
};
