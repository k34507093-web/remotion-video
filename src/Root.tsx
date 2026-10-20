import { Composition, Folder } from "remotion";
import { MyComponent } from "./Composition";
import { Reality } from "./Reality";
import { Touch } from "./Touch";
import { EmptyVials } from "./EmptyVials";
import { Labels } from "./Labels";
import { Breakdown } from "./Breakdown";
import { Return } from "./Return";
export const RemotionRoot = () => (
  <>
    <Composition
      id="SuXiao-Vision"
      component={MyComponent}
      width={1920}
      height={1080}
      fps={30}
      durationInFrames={600}
    />
    <Folder name="Scenes">
      <Composition
        id="Reality"
        component={Reality}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={105}
      />
      <Composition
        id="Touch"
        component={Touch}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={60}
      />
      <Composition
        id="EmptyVials"
        component={EmptyVials}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={90}
      />
      <Composition
        id="Labels"
        component={Labels}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={90}
      />
      <Composition
        id="Breakdown"
        component={Breakdown}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={165}
      />
      <Composition
        id="Return"
        component={Return}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={90}
      />
    </Folder>
  </>
);
