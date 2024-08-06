import { FadeAndSlideScrollTriggerAnimation } from "@/components/FadeAndSlideScriollTriggerAnimation"
import { LinkButton } from "@/components/LinkButton"
import { SkewScrollTriggerAnimation } from "@/components/SkewScrollTriggerAnimation"
import { TransitionImage } from "@/components/TransitionImage"

import Image1 from "@/assets/img.png"

import MapImage from "@/assets/map.svg"
import { SectionType1 } from "@/components/SectionType1"
import { Section1Title } from "@/components/Section1Title"

import Gastro from "@/assets/images/gastro/gstro.webp"
import Gastro1 from "@/assets/images/gastro/gstro1.webp"
import Gastro2 from "@/assets/images/gastro/gstro2.jpg"
import Gastro3 from "@/assets/images/gastro/gstro3.webp"
import Gastro4 from "@/assets/images/gastro/gstro4.webp"
import Gastro5 from "@/assets/images/gastro/gstro5.jpg"
import Gastro6 from "@/assets/images/gastro/gstro6.jpg"
import Gastro7 from "@/assets/images/gastro/gstro7.webp"
import Gastro8 from "@/assets/images/gastro/gstro8.jpg"
import Gastro9 from "@/assets/images/gastro/gstro9.jpg"
import Gastro10 from "@/assets/images/gastro/gstro10.jpg"
import { TransitionImage2 } from "@/components/TransitionImage2"



export const ServicesSection = () => {

    return (
        <>
            <SectionType1>
                <div className=" justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full md:w-2/5">
                    <Section1Title title="Service" subTitle="事業" />

                    <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 mt-3 sm:mt-5 md:mt-7 text-size2">
                        <h3 className="text-color2 text-title4">私達は街を創る飲食の企画集団です。</h3>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation delay={100} className="space-y-2 text-gray-700 text-size2">
                        <p>飲食店を開業される皆様の夢と熱い想いに寄り添い、</p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation className="space-y-2 text-gray-700 text-size2">
                        <p>皆様が永くご店舗を経営していただけるよう、 </p>
                    </SkewScrollTriggerAnimation>
                    <SkewScrollTriggerAnimation delay={50} className="space-y-2 text-gray-700 text-size2" >
                        <p>しっかりサポートさせていただきます。</p>
                    </SkewScrollTriggerAnimation>

                    <div className="mt-4 p-3">
                        <LinkButton href="/about" title="VIEW More" subTitle="もっとみる">

                        </LinkButton>
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 md:mt-24 ml-auto w-full md:w-2/5 flex flex-wrap">
                    <Service1 />

                </div>
            </SectionType1>


            <Service2 />


        </>
    )
}

const Service1 = () => {

    return (
        <article className="flex flex-col items-start w-full p-3 sm:p-8 gap-3 sm:gap-5 md:gap-8">
            <TransitionImage src={MapImage} alt="img" className="rounded-xl" />

            <SkewScrollTriggerAnimation>
                <h2 className="text-title3">開業・運営支援</h2>
            </SkewScrollTriggerAnimation>

            <SkewScrollTriggerAnimation >
                <p>
                    これから飲食店の開業をお考えですか？<br />
                    飲食店の新規開業は、ワクワクする気持ちと共に、不安、疑問が混在されているものと思います。<br />
                </p>
            </SkewScrollTriggerAnimation>

            <SkewScrollTriggerAnimation>
                <p>
                    飲食店開業をお考えの方が、まず行うべきことである事業計画などの事前準備から、<br />
                    資金調達の方法、物件の探し方、内外装について、必要な厨房機器や設備と選び方、
                </p>
            </SkewScrollTriggerAnimation>

            <SkewScrollTriggerAnimation>
                <p>
                    集客の方法など、オープンするまで、<br />
                    そしてオープンした後のことまで、<br />
                    皆様の不安・疑問が解消されますよう、詳しくご説明・ご案内いたします。
                </p>
            </SkewScrollTriggerAnimation>

            <div className="mt-4 p-3 ml-auto">
                <LinkButton href="/about" title="VIEW More" subTitle="もっとみる" />
            </div>
        </article>
    )
}

const Service2 = () => {
    return (
        <SectionType1 className="md:mt-48 bg-color8" disableLine>
            {/* Top */}
            <div className="flex justify-center gap-3 sm:gap-5 md:gap-16 w-full -mt-96">
                <div className="gap-8 sm:gap-8 md:gap-12 flex flex-col justify-center">
                    <SkewScrollTriggerAnimation>
                        <h3 className="text-title1 text-font1">ガストロノミーツーリズム</h3>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation>
                        <h4 className="text-title4 text-font2"> 地方から世界へ！↔世界から地方へ！</h4>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation>
                        <p className="text-size-p-wide">
                            観光立国として日本を持続的に活性化するため、<br />
                            世界中からフーディーズを集めます！
                        </p>
                    </SkewScrollTriggerAnimation>

                </div>
                <div>
                    <TransitionImage className="max-w-sm w-full" src={Gastro} alt="ガストロノミーツーリズム" />
                </div>
            </div>

            {/* Left */}
            <div className="flex flex-col gap-20 p-3 sm:p-5 md:p-8 items-center justify-between">
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full ml-auto" >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={25} src={Gastro1} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full "  >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={60} src={Gastro2} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-48 w-full ml-auto"  >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Gastro3} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>

            </div>

            {/* Center */}
            <div className="flex flex-col flex-grow justify-center items-center gap-3 sm:gap-5 md:gap-16 p-3 sm:p-5 md:p-8">
                <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-5">
                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            ガストロノミーツーリズム＝その土地の気候や風土が生んだ<br />
                            食材・習慣・伝統・歴史などによって育まれた食を楽しみ、<br />
                            文化に触れる体験を目的とした旅行のことです。
                        </p>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            欧米を中心に普及したスタイルで、<br />
                            世界的に注目度の高い日本の食文化を<br />
                            アピールすることでインバウンドを狙います。
                        </p>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            日本全国・海外で220店舗以上の飲食店をプロデュース・コンサルティングしてきた経験や<br />
                            ノウハウ・コネクションを活かし、<br />
                            生産者から飲食店、ホテル、観光、交通などの各分野を横断して、<br />
                            ガストロノミーツーリズムを行います。
                        </p>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-title4 text-color4">
                            地元の食材や資源を活用し、<br />
                            他の宿泊施設では体験できないような唯一無二の宿泊施設を創ります。
                        </p>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            当社が得意とするエッジの効いたコンセプトメイクにより、<br />
                            わざわざそこまで足を運びたくなるような、<br />
                            他では味わえない宿泊施設をプロデュース。<br />
                        </p>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation innerClassName="!bg-color8">
                        <p className="text-size-p-wide">
                            また今まで培った手法を駆使したモーションで、<br />
                            他県はもちろん、世界中からも集客を図ります。<br />
                            既存施設のリニューアルや運営のお手伝いも行いますので、<br />
                            経営の立て直し、後継者問題などお気軽にご相談下さい。
                        </p>
                    </SkewScrollTriggerAnimation>
                </div>
            </div>

            {/* Right */}
            <div className="w-1/2 md:w-full lg:w-auto flex flex-col flex-wrap md:flex-col gap-8 sm:gap-20 p-3 sm:p-5 md:p-8 items-center justify-between">
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full ml-auto" >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={25} src={Gastro4} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full  mr-auto"  >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={60} src={Gastro5} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-60 w-full  mx-auto"  >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={80} src={Gastro6} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>

            </div>

            {/* Bottom */}
            <div className="flex flex-wrap gap-3 md:gap-20 p-3 sm:p-5 md:p-8 items-center w-1/2 md:w-full justify-between">
                <FadeAndSlideScrollTriggerAnimation className="max-w-80 w-full"  >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={55} src={Gastro7} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-80 w-full"  >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={20} src={Gastro8} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-72 w-full"  >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={70} src={Gastro9} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
                <FadeAndSlideScrollTriggerAnimation className="max-w-72 w-full "  >
                    <TransitionImage className="rounded-xl" parallaxSlideLength={40} src={Gastro10} alt="img" />
                </FadeAndSlideScrollTriggerAnimation>
            </div>

        </SectionType1>
    )
}