import {
  AbsoluteFill,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Audio } from "@remotion/media";

export const prologueParagraphs = [
  ["有些废墟，不是用来打卡的。", "有些泥土，不是用来采样的。"],
  [
    "城郊那片废弃遗址，表面是断墙、坑地、旧工事；",
    "地下，却埋着细菌战遗留的毒剂填埋区。",
    "土壤、积水、工事裂缝，",
    "都是国家严格管控的生物涉密资源。",
  ],
  [
    "境外势力一直在找“普通人”替他们取样：",
    "用猎奇短视频引流，用高价任务设套，",
    "用“小众勘探”包装窃密。",
    "他们想要的不是素材，是数据——",
    "是能复盘当年细菌实验环境规律、",
    "实验漏洞的溯源数据。",
  ],
  [
    "有人追逐潮流，有人坚守底线，",
    "有人暗藏阴谋，有人守护山河。",
    "一处遗墟，四方命运交织。",
  ],
  ["无知不是借口，敬畏才是底线。", "全民守国安，寸土不松懈。"],
];

export const Prologue = ({
  audioFile = "prologue/narration.wav",
  musicFile,
}: {
  audioFile?: string;
  musicFile?: string;
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const lineHeight = 86;
  const gap = 46;
  const height =
    prologueParagraphs.reduce((n, p) => n + p.length * lineHeight, 0) +
    (prologueParagraphs.length - 1) * gap;
  return (
    <AbsoluteFill
      style={{ background: "#000", color: "#fff", overflow: "hidden" }}
    >
      <AbsoluteFill
        style={{
          maskImage:
            "linear-gradient(to bottom,transparent 0%,black 12%,black 88%,transparent 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 140,
            right: 140,
            textAlign: "center",
            fontFamily: "Noto Serif CJK SC, Songti SC, SimSun, serif",
            fontSize: 52,
            fontWeight: 400,
            letterSpacing: 2,
            lineHeight: `${lineHeight}px`,
            translate: `0px ${interpolate(frame, [0, durationInFrames - 0.5 * fps], [420, 600 - height], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px`,
          }}
        >
          {prologueParagraphs.map((paragraph, index) => (
            <div
              key={index}
              style={{
                marginBottom: index === prologueParagraphs.length - 1 ? 0 : gap,
                fontSize: index === 4 ? 60 : index === 0 ? 56 : 52,
                fontWeight: index === 4 ? 600 : 400,
              }}
            >
              {paragraph.map((line, i) => (
                <div
                  key={i}
                  style={{ height: lineHeight, whiteSpace: "nowrap" }}
                >
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>
      </AbsoluteFill>
      <Audio name="片头音轨" src={staticFile(audioFile)} premountFor={fps} />
      {musicFile ? (
        <Audio name="悬疑配乐" src={staticFile(musicFile)} premountFor={fps} />
      ) : null}
      <AbsoluteFill
        style={{
          background: "#000",
          opacity: interpolate(
            frame,
            [0, 5, durationInFrames - 5, durationInFrames - 1],
            [0.6, 0, 0, 1],
            {
              extrapolateRight: "clamp",
            },
          ),
        }}
      />
    </AbsoluteFill>
  );
};
