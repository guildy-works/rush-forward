import { SkewScrollTriggerAnimation } from "./SkewScrollTriggerAnimation";
import Image from "next/image";
import { TransitionImage } from "@/components/TransitionImage";

export const ChildPageHead = ({ src, title, subTitle }: { src:string, title: string, subTitle: string }) => (
    <section className="w-full h-[70vh] relative">
        <TransitionImage src={src} parallaxSlideLength={80} alt="レストラン" className="w-full h-full object-cover rounded" />
        <SkewScrollTriggerAnimation delay={60} className="absolute top-1/2 max-w-screen-lg w-full">
            <h3 className="text-font1 text-title3 mt-2 [writing-mode:vertical-rl]" >{subTitle}</h3>
            <h2 className="text-font2 text-title1 ml-3 font-jost" style={{ fontSize: "min(12vw,4rem)" }}>{title}</h2>
        </SkewScrollTriggerAnimation>
    </section>
)