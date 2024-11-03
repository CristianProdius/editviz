interface VideoPortfolioProps {
  title: string;
  videos: { id: string; title: string; driveId: string }[];
}

interface VideoItemProps {
  video: { id: string; title: string; driveId: string };
}

const VideoPortfolio: React.FC<VideoPortfolioProps> = ({ title, videos }) => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 max-w-[1240px] ">
        <h2 className="section-title mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoItem key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h3 className="text-lg font-semibold p-4 bg-gray-50 truncate">
        {video.title}
      </h3>
      <div className="aspect-video">
        <iframe
          src={`https://drive.google.com/file/d/${video.driveId}/preview`}
          className="w-full h-full"
          allow="autoplay"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPortfolio;
