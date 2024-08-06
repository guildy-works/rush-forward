import { StaticImageData } from "next/image"
import styles from "./Book.module.scss"
import clsx from "clsx"

export const Book = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={clsx(styles.book, className)}>
            {children}
        </div>
    )
}