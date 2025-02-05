import { SectionType1 } from "@/components/SectionType1"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"

export const ContactSection = () => {

    return (
        <SectionType1 disableLine className="bg-color8" innerClassName="items-center">

                <FadeAndSlideScrollTriggerAnimation className="bg-white p-8 rounded-sm md:p-16 md:px-48 w-full my-8 md:my-32 flex flex-col items-center justify-center">
                    <h2 className="text-title2 font-bold text-center mb-2">CONTACT</h2>
                    <p className="text-center text-gray-600 mb-8">お問い合わせ・ご相談はお気軽にどうぞ。</p>

                    <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
                        <div className="mb-6 md:mb-0">
                            <p className="text-title3 font-bold mb-2">tel.0120-622835</p>
                            <p className="text-size2 text-gray-600">営業時間／10:00〜18:00　定休日／土日祝日</p>
                        </div>

                        <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                            お問い合わせフォーム
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </FadeAndSlideScrollTriggerAnimation>
   
        </SectionType1>
    )
}
