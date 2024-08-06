import { SkewScrollTriggerAnimation } from "./SkewScrollTriggerAnimation";

export const Section1Title = ({ title, subTitle }: { title: string, subTitle: string }) => (
    <SkewScrollTriggerAnimation delay={60} className="flex items-center">
        <h3 className="text-font1 text-title3 mt-2 [writing-mode:vertical-rl]" >{subTitle}</h3>
        <h2 className="text-font2 text-title1 ml-3 font-jost" style={{ fontSize: "min(12vw,4rem)" }}>{title}</h2>
    </SkewScrollTriggerAnimation>
)