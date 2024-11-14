'use client'

import React from 'react';
import Image from 'next/image';

import { ChildPageHead } from "@/components/ChildPageHeadImage";
import { TransitionImage } from "@/components/TransitionImage";
import { ContactSection } from "@/pages-components/top/ContactSection";

import TopImage from "@/assets/top1.jpg";
import Sub4Img from "@/assets/img4.png";
import Sub5Img from "@/assets/img8.jpg";
import Sub6Img from "@/assets/img7.png";
import { ServicesSection } from '@/pages-components/service/ServicesSection';

const ServicesPage = () => {
    return (
        <div className="bg-white min-h-screen overflow-x-hidden">
            <ServicesSection />
            <ContactSection />
        </div>
    );
};

export default ServicesPage;
