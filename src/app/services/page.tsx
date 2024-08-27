'use client'

import React from 'react';
import { FadeAndSlideScrollTriggerAnimation } from '@/components/FadeAndSlideScriollTriggerAnimation';
import { SectionBar } from '@/components/SectionBar';
import { ChildPageHead } from "@/components/ChildPageHeadImage";
import Image from "next/image";
import { TransitionImage } from "@/components/TransitionImage";
import HeadSection from "@/pages-components/service/HeadSection";
import { ServicesSection } from "@/pages-components/service/ServicesSection";
import { ContactSection } from "@/pages-components/top/ContactSection";



import TopImage from "@/assets/top1.jpg";
import CEOImage from "@/assets/top.jpg";

import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";

const ServicesPage = () => {
    return (
        <div className="bg-white min-h-screen overflow-x-hidden">
            <HeadSection />
            <ServicesSection/>
            <ContactSection />
        </div>
    );
};

const serviceItems = [
    {
        image: "@/assets/producing.svg",
        title: "Producing / Consulting",
        subtitle: "プロデュース・コンサルティング部門",
        description: "運営コンサルティング・開業プロデュースを中心に、様々なサポートを行っております。"
    },
    {
        image: "/img.jpg",
        title: "Gastronomy Tourism",
        subtitle: "ガストロノミーツーリズム部門",
        description: "観光立国として日本を持続的に活性化するため、世界中からフーディーズを集めます！"
    },
    {
        image: "/option-photo.jpg",
        title: "Hotel",
        subtitle: "ホテルプロデュース・再生部門",
        description: "地元の食材や資源を活用し、他の宿泊施設では体験できないような唯一無二の宿泊施設を創ります。"
    },
    {
        image: "/option-makeup.jpg",
        title: "Restaurant",
        subtitle: "飲食店部門",
        description: "紹介テキスト紹介テキスト紹介テキスト紹介テキスト紹介テキスト紹介テキスト紹介テキスト"
    }
];

export default ServicesPage;
