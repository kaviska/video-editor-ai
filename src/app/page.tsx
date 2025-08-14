"use client";
import dynamic from "next/dynamic";

const CreativeEditorSDK = dynamic(() => import("@/components/CreativeEditorSDK"), {
  ssr: false,
  loading: () => <div>Loading Video Editor...</div>
});

export default function Home() {
  return (
    <div>
      
      <CreativeEditorSDK />
      
    </div>
  );
}
