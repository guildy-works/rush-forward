'use client'
import Image from "next/image";
import { newsItems, News } from "@/pages-components/events/eventsMock";
import { useParams } from "next/navigation";

export function generateStaticParams() {
  const events = newsItems// イベントデータを取得する関数
  return []
}
 export const dynamicParams = false
export const dynamic = 'force-static'
export default function EventDetailsPage({paramss  }: { paramss:any}) {
  // const paramss = useParams();
  // console.log(paramss.id);
  return <div>イベントID: {paramss.id}</div>
}