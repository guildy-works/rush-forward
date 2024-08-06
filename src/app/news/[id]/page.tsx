

import Image from "next/image";
import KiraKira from "@/assets/kirakira.png";

import { ScrollIndicator } from "@/components/ScrollIndicatior";
import { TopSection } from "@/pages-components/top/TopSection";
import { NewsSection } from "@/pages-components/top/NewsSection";
import { ScrollContainer } from "@/libs/ScrollTrigger";
import { EventsSection } from "@/pages-components/top/EventsSection";
import { eventsMock } from "@/pages-components/events/eventsMock";

export function generateStaticParams() {
    const events = eventsMock// イベントデータを取得する関数
    return events.map((event) => ({
      id: event.id.toString(),
    }))
  }

export default function EventDetailsPage({ params }: { params: { id: string } }) {
    return <div>イベントID: {params.id}</div>
  }