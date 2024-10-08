import { css } from "@emotion/react";
import { ScrollTriggerTransition, Transition, TransitionProps } from "../../libs/ScrollTrigger";
import React, { ReactNode } from "react";
import { Stalemate } from "next/font/google";

interface FadeAndSlideAnimationProps extends TransitionProps {
    transform?: {
        translate?: {
            x?: string;
            y?: string;
        }
        rotate?: string;
        scale?: number;
        // eslint-disable-next-line @typescript-eslint/ban-types
        transformOrigin?: "bottom" | "center" | "left" | "right" | "top" | (string & {});
    }
}

export const FadeAndSlideAnimation = (props: FadeAndSlideAnimationProps) => {
    const { transform } = props;
    return <Transition
        in={props.in}
        delay={props.delay}
    >
        {state =>
            transform
                ? (
                    <div
                        className={props.className}
                        style={{
                            ...{
                                transformOrigin: transform?.transformOrigin,
                                transform: `translate(${transform?.translate?.x ?? "0"},${transform?.translate?.y ?? "0"}) rotate(${transform?.rotate ?? "0"}) scale(${transform?.scale ?? 1})`,
                                opacity: 0,
                                transition: `all ${parse(props.delay) ?? 1200}ms cubic-bezier(0.24, 0.26, 0, 0.64)`
                            },
                            ...state === "entered"
                                ? {
                                    transform: "translate(0px,0px) rotate(0) scale(1)",
                                    opacity: 1,
                                }
                                : undefined,
                            ...props.style,
                        }}
                    >
                        {props.children as ReactNode}
                    </div>
                )
                : (
                    <div
                        className={props.className}
                        style={{
                            ...({
                                transform: `translate(-10px,20px) rotate(0) scale(1.04)`,
                                opacity: 0,
                                transition: `all ${parse(props.delay) ?? 1200}ms cubic-bezier(0.24, 0.26, 0, 0.64)`
                            }),
                            ...state === "entered" ? ({
                                transform: "translate(0px,0px) rotate(0) scale(1)",
                                opacity: 1,
                            }) : undefined,
                            ...props.style,
                        }}
                    >
                        {props.children as ReactNode}
                    </div>
                )}
    </Transition>;
};

const parse = (delay?: number | {
    appear?: number | undefined;
    enter?: number | undefined;
    exit?: number | undefined
}) => {
    if (typeof delay === "object") {
        return delay?.appear;
    }

    return undefined;
};