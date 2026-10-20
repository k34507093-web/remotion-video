import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const FilmShot = ({
  panel,
  duration,
  mono = false,
}: {
  panel: number;
  duration: number;
  mono?: boolean;
}) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ overflow: "hidden", background: "#090b0c" }}>
      <AbsoluteFill
        style={{
          scale: interpolate(f, [0, duration * fps], [1.03, 1.13], {
            extrapolateRight: "clamp",
          }),
          translate: `${Math.sin(f / 65) * 9}px ${interpolate(f, [0, duration * fps], [8, -8])}px`,
          filter: mono ? "grayscale(1) contrast(1.12)" : "saturate(.65)",
        }}
      >
        <Img
          src={staticFile("storyboard.png")}
          style={{
            position: "absolute",
            width: "300%",
            height: "200%",
            maxWidth: "none",
            left: `-${(panel % 3) * 100}%`,
            top: `-${Math.floor(panel / 3) * 100}%`,
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center,transparent 35%,rgba(0,0,0,.65))",
        }}
      />
      {mono && (
        <AbsoluteFill
          style={{
            opacity: 0.1 + Math.sin(f * 2.4) * 0.025,
            background:
              "repeating-linear-gradient(0deg,transparent 0px,transparent 3px,#111 4px)",
          }}
        />
      )}
    </AbsoluteFill>
  );
};
