import { FadeAndSlideScrollTriggerAnimation } from "@/components/FadeAndSlideScriollTriggerAnimation";
import { LinkButton } from "@/components/LinkButton";
import { Section1Title } from "@/components/Section1Title";
import { SectionBar } from "@/components/SectionBar"
import { SectionType1 } from "@/components/SectionType1";
import Link from "next/link";
import Image from "next/image";

interface News {
    date: string;
    title: string;
    image: string;

}

const newsItems: News[] = [
    {
        date: "2024.08.07",
        title: "新しい飲食店コンサルティングサービス「レストラン成功の道」開始",
        image: "/images/news/consulting-service.jpg"
    },
    {
        date: "2024.07.25",
        title: "夏季限定！飲食店開業セミナーを開催します",
        image: "/images/news/summer-seminar.jpg"
    },
    {
        date: "2024.07.10",
        title: "成功事例：「和風居酒屋 匠」が月商1000万円を達成",
        image: "/images/news/success-story-izakaya.jpg"
    },
    {
        date: "2024.06.30",
        title: "新規取引先「グルメフードサプライ株式会社」との提携を発表",
        image: "/images/news/new-partnership.jpg"
    },
    {
        date: "2024.06.15",
        title: "飲食店向けDX推進サービスをリリースしました",
        image: "/images/news/dx-service.jpg"
    },
    {
        date: "2024.06.01",
        title: "「第10回 飲食業界イノベーションアワード」で当社が金賞を受賞",
        image: "/images/news/award-winning.jpg"
    },
];

export const NewsSection = () => {
    return (
        <SectionType1 className="bg-color8">
            <div className="justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full">
                <Section1Title title="News" subTitle="　　" innerClassName="!bg-color8" />

                <div className="mx-auto w-full">
                    <FadeAndSlideScrollTriggerAnimation>
                        <h3 className="text-title4 mt-4 sm:mt-8">新着情報・お知らせ</h3>
                    </FadeAndSlideScrollTriggerAnimation>

                    <section className="w-full grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 sm:gap-6 md:gap-8">
                        {newsItems.map((item, index) => (
                            <FadeAndSlideScrollTriggerAnimation key={index} innerClassName="size-full">
                                <NewsItem news={item} />
                            </FadeAndSlideScrollTriggerAnimation>
                        ))}
                    </section>


                </div>
                <div className="w-full flex justify-end mt-4 sm:mt-8">
                    <div className="flex-1" />

                    <FadeAndSlideScrollTriggerAnimation className="w-full sm:w-auto">
                        <LinkButton title="VIEW MORE" subTitle="お知らせ一覧" href=""></LinkButton>
                    </FadeAndSlideScrollTriggerAnimation>
                </div>
            </div>
        </SectionType1>
    )
}

const NewsItem = (props: {
    news: News
}) => {
    const { news } = props;

    const date = new Date(news.date);

    return (
        <div className="size-full">
            <div className="size-full flex p-4 pl-0 shadow-lg bg-white rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl transition:shadow duration-300 ease-in-out">
                <div className="p-4 w-24 bg-color6 flex flex-col items-center justify-center gap-2 rounded-r-xl">
                    <div className="text-size-p text-color2">{date.getFullYear()}</div>
                    <div className="text-title2 text-color3">{date.getMonth() + 1}.{date.getDate()}</div>
                </div>

                <div className="md:w-2/3 px-4">
                    <h4 className="text-xl font-bold mt-2 mb-2">{news.title}</h4>
                    <Link href="" className="text-color3 hover:underline inline-block">
                        もっと見る
                    </Link>
                </div>
            </div>
        </div>
    )
}