import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

type Props = {
  panel: number;
  length: number;
  cropY: number;
  pullBack?: boolean;
};
export const DuskShot = ({ panel, length, cropY, pullBack = false }: Props) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        background: "#19140f",
        opacity: interpolate(f, [0, 8], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      <AbsoluteFill
        style={{
          scale: interpolate(
            f,
            [0, length],
            pullBack ? [1.08, 1.01] : [1.01, 1.055],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
          translate: `${interpolate(f, [0, length], pullBack ? [0, -10] : [-8, 6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px 0px`,
        }}
      >
        <Img
          src={staticFile("dusk/storyboard.png")}
          style={{
            position: "absolute",
            width: "300%",
            maxWidth: "none",
            height: "auto",
            left: `-${panel * 100}%`,
            top: cropY,
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%,transparent 45%,rgba(20,12,7,.42) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
