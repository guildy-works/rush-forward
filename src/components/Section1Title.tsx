import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import clsx from "clsx";
export const Section1Title = ({ title, subTitle, className, innerClassName, skewPanelClass }: {
    title: string,
    subTitle: string,
    className?: string,
    skewPanelClass?: string,
    innerClassName?: string,
}) => (
    <FadeAndSlideScrollTriggerAnimation delay={60} className={className} innerClassName={clsx("flex items-center", innerClassName)}>
        <h3 className="text-color3 text-title3 [writing-mode:vertical-rl]" >{subTitle}</h3>
        <h2 className="text-font2 text-title1 ml-3 font-jost font-light" style={{ fontSize: "min(12vw,4rem)" }}>{title}</h2>
    </FadeAndSlideScrollTriggerAnimation>
)