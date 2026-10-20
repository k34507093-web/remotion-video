import {
  AbsoluteFill,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";
import { Audio } from "@remotion/media";
import type { Caption } from "@remotion/captions";
import { Reality } from "./Reality";
import { Touch } from "./Touch";
import { EmptyVials } from "./EmptyVials";
import { Labels } from "./Labels";
import { Breakdown } from "./Breakdown";
import { Return } from "./Return";
const Subtitle = ({ captions }: { captions: Caption[] }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const active = captions.find(
    (c) => (f / fps) * 1000 >= c.startMs && (f / fps) * 1000 < c.endMs,
  );
  return active ? (
    <div
      style={{
        position: "absolute",
        bottom: 102,
        width: "100%",
        textAlign: "center",
        color: "#f4f0e8",
        fontSize: 40,
        fontFamily: "Noto Serif CJK SC",
        letterSpacing: 3,
        textShadow: "0 2px 8px black",
      }}
    >
      {active.text}
    </div>
  ) : null;
};
export const MyComponent = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill
      style={{ background: "#050708", fontFamily: "Noto Sans CJK SC" }}
    >
      <Sequence
        name="现实·触土前"
        durationInFrames={3.5 * fps}
        premountFor={fps}
      >
        <Reality />
      </Sequence>
      <Sequence
        name="触土·时空重叠"
        from={3.5 * fps}
        durationInFrames={2 * fps}
        premountFor={fps}
      >
        <Touch />
      </Sequence>
      <Sequence
        name="幻境·空瓶分装"
        from={5.5 * fps}
        durationInFrames={3 * fps}
        premountFor={fps}
      >
        <EmptyVials />
      </Sequence>
      <Sequence
        name="幻境·样本标记"
        from={8.5 * fps}
        durationInFrames={3 * fps}
        premountFor={fps}
      >
        <Labels />
      </Sequence>
      <Sequence
        name="台账·崩溃失神"
        from={11.5 * fps}
        durationInFrames={5.5 * fps}
        premountFor={fps}
      >
        <Breakdown />
        <Subtitle
          captions={[
            {
              text: "这些致病菌，",
              startMs: 400,
              endMs: 2200,
              timestampMs: null,
              confidence: null,
            },
            {
              text: "是曾经伤害无数国人的噩梦……",
              startMs: 2200,
              endMs: 5400,
              timestampMs: null,
              confidence: null,
            },
          ]}
        />
      </Sequence>
      <Sequence
        name="耳鸣·幻境破碎·重回现实"
        from={17 * fps}
        durationInFrames={3 * fps}
        premountFor={fps}
      >
        <Return />
      </Sequence>
      <Audio src={staticFile("atmosphere.wav")} premountFor={fps} />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(0deg,rgba(0,0,0,.7),transparent 25%,transparent 75%,rgba(0,0,0,.3))",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          height: 70,
          width: "100%",
          background: "#050708",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          height: 70,
          width: "100%",
          background: "#050708",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 80,
          top: 94,
          color: "#e5dfd1",
          fontSize: 21,
          letterSpacing: 7,
          opacity: interpolate(f, [0, 25, 85, 105], [0, 0.8, 0.8, 0], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        镜头 02 / 触土 · 入梦
      </div>
      {f > 5.5 * fps && f < 11.5 * fps && (
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 95,
            fontSize: 20,
            color: "#ccc",
            letterSpacing: 4,
          }}
        >
          幻境 / {f < 8.5 * fps ? "空瓶分装" : "样本标记"}
        </div>
      )}
      <div
        style={{
          position: "absolute",
          right: 72,
          bottom: 28,
          fontSize: 15,
          color: "#8c9190",
          letterSpacing: 3,
        }}
      >
        历史题材虚构影像 · 全部为空道具
      </div>
      <AbsoluteFill
        style={{
          background: "#050708",
          opacity: interpolate(f, [0, 18, 570, 599], [1, 0, 0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};
