'use client'

import Image from "next/image";
import KiraKira from "../../public/kirakira.png";

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { SectionBar } from "@/components/SectionBar";
import { TopSection } from "@/pages-components/top/TopSection";
import { NewsSection } from "@/pages-components/top/NewsSection";
import { ScrollContainer } from "@/libs/ScrollTrigger";
import { EventsSection } from "@/pages-components/top/EventsSection";
import AboutSection from "@/pages-components/top/AboutSection";

import '@splidejs/splide/css'; 
import { AmazonBookSection } from "@/pages-components/top/AmazonBookSection";
import { ServicesSection } from "@/pages-components/top/ServicesSection";
import { ContactSection } from "@/pages-components/top/ContactSection";

export default function Home() {
    return (
        <>
            <TopSection />
            <AboutSection />

            <AmazonBookSection />

            <NewsSection />

            <ServicesSection />

            <ContactSection />

            <div className="w-full">

            </div>

            <ScrollIndicator />

        </>
    );
}
