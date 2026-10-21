import {
  AbsoluteFill,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Audio } from "@remotion/media";
import type { Caption } from "@remotion/captions";
import { DuskShot } from "./DuskShot";

const Captions = ({ captions }: { captions: Caption[] }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const active = captions.find(
    (c) => (frame / fps) * 1000 >= c.startMs && (frame / fps) * 1000 < c.endMs,
  );
  return active ? (
    <div
      style={{
        position: "absolute",
        left: 180,
        right: 180,
        bottom: 110,
        textAlign: "center",
        fontFamily: "Noto Serif CJK SC, serif",
        fontSize: 42,
        letterSpacing: 4,
        color: "#fff7e7",
        textShadow: "0 2px 7px #000, 0 0 20px #000",
      }}
    >
      {active.text}
    </div>
  ) : null;
};

export const DuskScene = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ background: "#15100c" }}>
      <Sequence
        name="黄昏·公告前低头沉默"
        durationInFrames={6.7 * fps}
        premountFor={fps}
      >
        <DuskShot panel={0} length={6.7 * fps} cropY={-150} />
      </Sequence>
      <Sequence
        name="空瓶轻放·手部特写"
        from={6.5 * fps}
        durationInFrames={2 * fps}
        premountFor={fps}
      >
        <DuskShot panel={1} length={2 * fps} cropY={-640} />
      </Sequence>
      <Sequence
        name="后退·注视遗址"
        from={8.2 * fps}
        durationInFrames={1.8 * fps}
        premountFor={fps}
      >
        <DuskShot panel={2} length={1.8 * fps} cropY={-270} pullBack />
      </Sequence>
      <Audio
        name="黄昏风声与道具音"
        src={staticFile("dusk/ambience.wav")}
        premountFor={fps}
      />
      <Sequence name="苏晓画外音·原来无知不是借口" from={22} premountFor={fps}>
        <Audio src={staticFile("dusk/voice-soft-1.wav")} premountFor={fps} />
      </Sequence>
      <Sequence name="苏晓画外音·敬畏才是底线" from={124} premountFor={fps}>
        <Audio src={staticFile("dusk/voice-soft-2.wav")} premountFor={fps} />
      </Sequence>
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(0deg,rgba(10,7,4,.65),transparent 28%,transparent 80%,rgba(10,7,4,.15))",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          background: "#100e0c",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 64,
          background: "#100e0c",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 82,
          top: 94,
          fontFamily: "Noto Sans CJK SC, sans-serif",
          fontSize: 22,
          letterSpacing: 5,
          color: "#f1dfbf",
          opacity: interpolate(f, [0, 20, 65, 95], [0, 0.85, 0.85, 0], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        黄昏 / 遗址外围
      </div>
      <Captions
        captions={[
          {
            text: "原来，无知不是借口。",
            startMs: 730,
            endMs: 3950,
            timestampMs: null,
            confidence: null,
          },
          {
            text: "敬畏，才是底线。",
            startMs: 4130,
            endMs: 6620,
            timestampMs: null,
            confidence: null,
          },
        ]}
      />
      <AbsoluteFill
        style={{
          background: "#100e0c",
          opacity: interpolate(f, [0, 15, 290, 299], [1, 0, 0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};
