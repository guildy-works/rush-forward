'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./LinkButton.module.scss";
import clsx from "clsx";
import Arrow from "@/assets/images/Arrow.svg";

export const LinkButton = (
    {
        href,
        title,
        subTitle,
        className,
        target,
        outerClass
    }: {
        href: string,
        title?: string
        subTitle?: string,
        className?: string,
        outerClass?: string,
        target?: string
    }
) => {

    return (
        <Link href={href} target={target} className={clsx("bg-gray-800",outerClass)}>
            <div className={clsx(styles.viewMore,className)}>
                {
                    title && <h2
                        className="font-jost font-light"
                        style={{
                            fontSize: "0.7rem",
                            userSelect: "none"
                        }}
                    >
                        {title}
                    </h2>
                }
                <h2
                    className="font-jost text-size3"
                    style={{
                        userSelect: "none"
                    }}>
                    {subTitle}
                </h2>


                <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.5 3.9">
                    <title>arrow01_pc</title>
                        <g id="レイヤー_1-2" data-name="レイヤー 1">
                            <polygon points="32.5 3.9 0 3.9 0 2.9 29.5 2.9 26.7 0.8 27.3 0 32.5 3.9" />
                        </g>
                </svg>
            </div>
        </Link>
    );
};
