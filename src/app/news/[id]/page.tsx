import Image from "next/image";
import { newsItems, News } from "@/pages-components/events/eventsMock";

export function generateStaticParams() {
  const events = newsItems// イベントデータを取得する関数
  return events.map((event: News) => ({
    id: event.id.toString(),
  }))
}

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  return <div>イベントID: {params.id}</div>
}