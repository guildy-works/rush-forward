import { Transition, TransitionProps } from "@/libs/ScrollTrigger";
import { css } from "@emotion/react";
import clsx from "clsx";
import React, { ReactNode, useEffect, useRef, useState } from "react";

type AnimationProps = TransitionProps;
interface SkewAnimationProp extends AnimationProps {
    bgcolor?: string;
    speed?: number;
    innerClassName?: string;
}

export const SkewAnimation = (props: SkewAnimationProp) => {
    const [el, setEl] = useState<HTMLElement | null>(null);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const width = el?.getBoundingClientRect().width;
        if (width) {
            // width / 100px
            const w = width / 100;
            const t = Math.floor(300 * w * (props.speed ?? 1));
            if (t !== time) {
                setTime(t);
            }
        }
    }, [el, time, props.speed]);

    return <Transition {...props}>
        {
            state => <div
                style={{
                    ...props.style,
                    position: "relative",
                    width: "fit-content",
                    margin: "0 auto",
                }}
                className={props.className}
                ref={el => {
                    if (el) {
                        setEl(el as any);
                    }
                }}
            >
                <div
                    className={clsx("absolute inset-0 bg-white", props.innerClassName)}
                    style={{
                        transition: `transform ${time}ms cubic-bezier(0.4, 0.41, 0.1, 0.65)`,
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        transformOrigin: "right",
                        background: props.bgcolor,
                        transform: state === "entered" ? "scaleX(0) skewX(-10deg)" : "scaleX(1.25) translateX(12%) skewX(-30deg)",
                    }}
                />
                {props.children as any}
            </div>
        }
    </Transition >;
};
