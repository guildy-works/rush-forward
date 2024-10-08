import clsx from "clsx";
import { SkewScrollTriggerAnimation } from "./SkewScrollTriggerAnimation";

export const Section1Title = ({ title, subTitle, className, innerClassName }: {
    title: string,
    subTitle: string,
    className?: string,
    innerClassName?: string
}) => (
    <SkewScrollTriggerAnimation delay={60} className={clsx("flex items-center", className)} innerClassName={innerClassName}>
        <h3 className="text-font1 text-title3 mt-2 [writing-mode:vertical-rl]" >{subTitle}</h3>
        <h2 className="text-font2 text-title1 ml-3 font-jost font-extralightTOP" style={{ fontSize: "min(12vw,4rem)" }}>{title}</h2>
    </SkewScrollTriggerAnimation>
)