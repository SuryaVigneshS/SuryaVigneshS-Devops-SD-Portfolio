import type { PipelineStage } from "./data";

export const stageMeta: Record<
  PipelineStage,
  { label: string; text: string; bg: string; border: string; dot: string }
> = {
  build: {
    label: "Build",
    text: "text-stage-build",
    bg: "bg-stage-build/10",
    border: "border-stage-build/40",
    dot: "bg-stage-build",
  },
  test: {
    label: "Test",
    text: "text-stage-test",
    bg: "bg-stage-test/10",
    border: "border-stage-test/40",
    dot: "bg-stage-test",
  },
  deploy: {
    label: "Deploy",
    text: "text-stage-deploy",
    bg: "bg-stage-deploy/10",
    border: "border-stage-deploy/40",
    dot: "bg-stage-deploy",
  },
  monitor: {
    label: "Monitor",
    text: "text-stage-monitor",
    bg: "bg-stage-monitor/10",
    border: "border-stage-monitor/40",
    dot: "bg-stage-monitor",
  },
};
