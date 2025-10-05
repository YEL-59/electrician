'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



export function MemoryVideo() {

    const MemoryVideoProps = {
        videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Memory Video"

    }

    return (
        <div>
            <div className=" flex flex-col justify-center items-center py-5">
                <h1 className="text-3xl font-bold text-black py-2">Memory Video</h1>
                <p>Watch the Journey</p>
            </div>
            <Card className="w-full max-w-5xl mx-auto bg-gradient-to-br from-pink-50 to-amber-50 border border-amber-200 rounded-xl p-0 overflow-hidden shadow-lg">

                <CardContent className="p-0">
                    <video
                        className="w-full aspect-video object-cover"
                        controls
                        src={MemoryVideoProps?.videoSrc}
                    >
                        Your browser does not support the video tag.
                    </video>
                </CardContent>
            </Card>
        </div>
    );
}