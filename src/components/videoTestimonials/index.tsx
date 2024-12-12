"use client";
import React from "react";

interface VideoTestimonialsProps {
  successStories: {
    id: string;
    driveId: string;
    creator: {
      name: string;
      role: string;
    };
  }[];
}

function VideoTestimonials({ successStories }: VideoTestimonialsProps) {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="section-title my-8">Here they are in their own words</h2>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {successStories.slice(0, 3).map((story) => (
            <VideoCard key={story.id} story={story} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
          {successStories.slice(3, 5).map((story) => (
            <VideoCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  story,
}: {
  story: VideoTestimonialsProps["successStories"][0];
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="aspect-video relative">
        <iframe
          src={`https://drive.google.com/file/d/${story.driveId}/preview`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <button
          className="absolute top-3 right-3 p-2 rounded-full bg-black/20 hover:bg-black/30 transition-colors duration-300"
          aria-label="Open in full screen"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0 0l-5-5m-7 11h4m-4 0v4m0-4l5 5m11-5h-4m4 0v4m0-4l-5 5"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{story.creator.name}</h3>
        <p className="text-sm text-gray-500">{story.creator.role}</p>
      </div>
    </div>
  );
}

export default VideoTestimonials;
