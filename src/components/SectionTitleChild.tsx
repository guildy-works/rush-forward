import clsx from "clsx";
import { SkewScrollTriggerAnimation } from "./SkewScrollTriggerAnimation";

export const SectionTitleChild = ({ title, subTitle, className, innerClassName }: {
    title: string,
    subTitle: string,
    className?: string,
    innerClassName?: string
}) => (
    <SkewScrollTriggerAnimation delay={60} className={clsx("flex flex-col items-left", className)} innerClassName={innerClassName}>
        <h3 className="text-font1 text-title3 mt-2" >{subTitle}</h3>
        <h2 className="text-font2 text-title1 ml-3 font-jost font-extralightTOP" style={{ fontSize: "min(3.5rem)" }}>{title}</h2>
    </SkewScrollTriggerAnimation>
)