"use client";

import "./globals.scss";
import { ScrollContainer, ScrollTrigger } from "@/libs/ScrollTrigger";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" >
            <body>
                <ScrollContainer className="flex min-h-screen flex-col h-svh relative">
                    <Header />
                    <main >
                        {children}
                    </main>
                    <Footer />
                </ScrollContainer>
            </body>
        </html>
    );
}
