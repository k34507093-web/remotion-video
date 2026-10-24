# 新增：40秒纯BGM片头（无配音）

Studio 选择 `SuXiao-Prologue-BgmOnly`。
音轨仅使用原创悬疑BGM，去除人声和旁白时的压低处理。

```sh
npx remotion render src/index.ts SuXiao-Prologue-BgmOnly out/suxiao-prologue-40s-bgm-only.mp4 --concurrency=2
```

---

# 新增：40秒悬疑配乐版片头

Studio 选择 `SuXiao-Prologue-Mystery`。低沉中文AI男声，分句停顿与结尾重音；加入本项目合成的原创悬疑氛围配乐，并在旁白时降低配乐音量。

```sh
npx remotion render src/index.ts SuXiao-Prologue-Mystery out/suxiao-prologue-40s-mystery.mp4 --concurrency=2
```

旁白和BGM分别保存为 public/prologue/narration-deep.wav、public/prologue/mystery-bgm.wav，可在Remotion中分别编辑。
旁白使用 sherpa-onnx 官方发布的 vits-zh-hf-fanchen-ZhiHuiLaoZhe 预训练模型合成，并调整分句时长、EQ与动态。无需本地安装模型即可播放或重新导出。

---

# 新增：40秒片头版本

完整原文、黑底白字、上滚字幕和放慢的中文配音。
在 Studio 选择 `SuXiao-Prologue-40s`。

```sh
npx remotion render src/index.ts SuXiao-Prologue-40s out/suxiao-prologue-40s.mp4 --concurrency=2
```

配音使用原始合成语音重新调整到40秒版本，保留音调。
之前的20秒版本仍可选择 `SuXiao-Prologue`。

---

# 新增：黑底白字片头（19.8秒，完整配音滚动文字）

Studio 选择 `SuXiao-Prologue`。全文逐字保留；配音为快速朗读，声音经保持音调的时间压缩处理。

本地导出：

```sh
npx remotion render src/index.ts SuXiao-Prologue out/suxiao-prologue-20s.mp4 --concurrency=2
```

全文位于 public/prologue/text.txt；成品配音已包含在 public/prologue/narration.wav，无需额外语音服务。

---

# 新增：苏晓·黄昏遗址（10秒，含中文画外音）

安装 Node.js 24，在项目目录执行 `npm ci`，再执行 `npm run dev`。
在 Studio 中选择 **SuXiao-Dusk**。

导出本段视频：

```sh
npx remotion render src/index.ts SuXiao-Dusk out/suxiao-dusk-10s.mp4 --concurrency=2
```

所有图片、旁白音频和环境音已包含在 public/dusk，无需额外配音服务或密钥。
画面为写实动态分镜；中文合成画外音：“原来，无知不是借口。敬畏，才是底线。”
旁白由本地 sherpa-onnx VITS 模型合成，使用官方预训练 vits-zh-hf-fanchen-C 模型；已渲染为 WAV 随项目提供，模型本身不包含在项目包中。

---

# 苏晓·触土入梦 — Remotion 完整项目

20秒 / 1920×1080 / 30fps / H.264 MP4。
动态分镜、中文字幕、低频氛围、心跳、耳鸣与幻境破碎效果。无人物配音。

## 本地运行

1. 安装 Node.js 24 LTS（https://nodejs.org/）。
2. 解压整个文件夹，保留 src 和 public 的目录结构。
3. 在本目录打开终端，执行：

```sh
npm ci
npm run dev
```

在 Studio 中选择 SuXiao-Vision；Scenes 文件夹包含各分镜独立时间线。

## 导出 MP4

在本目录执行：

```sh
npx remotion render src/index.ts SuXiao-Vision out/suxiao-vision.mp4 --concurrency=2
```

生成文件位于 out/suxiao-vision.mp4。
首次导出需要联网，让 Remotion 自动准备浏览器。
如果浏览器下载受限，可追加 --browser-executable 参数并填入本机实际 Chrome 路径。
不要使用云端的 /usr/bin/chromium 路径，除非本机恰好有该可执行文件。

## 素材与字体

public/storyboard.png：3列×2行的完整六宫格画面，程序按格选取，不需要手动裁图。
public/atmosphere.wav：完整20秒音效，已包含，无需 Python。
字体使用 Noto Sans CJK SC 和 Noto Serif CJK SC；安装后可匹配云端字体，未安装时由系统回退。

## 检查

```sh
npm run lint
```

此包包含所有组件、依赖锁文件和静态素材；不包含 node_modules、Git元数据、环境变量或凭证。
