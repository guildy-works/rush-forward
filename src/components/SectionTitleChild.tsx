import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import clsx from "clsx";

export const SectionTitleChild = ({ title, subTitle, className, innerClassName }: {
    title: string,
    subTitle: string,
    className?: string,
    innerClassName?: string
}) => (
    <SkewScrollTriggerAnimation delay={60} className={clsx("flex flex-col items-left h-{120%}", className)} innerClassName={innerClassName}>
        <h3 className="text-color3 text-title3 mt-2" >{subTitle}</h3>
        <h2 className="text-font2 text-title1 mt-2 font-jost font-light" style={{ fontSize: "min(3.5rem)" }}>{title}</h2>
    </SkewScrollTriggerAnimation>
)