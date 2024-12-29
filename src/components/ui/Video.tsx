interface IVideo {
  src: string;
  className?: string;
}

const Video = ({ src, className }: IVideo) => {
  return (
    <video
      className={`w-3/4 rounded-2xl ${className} tiltedAnimation border-2 lg:border-4 border-foreground/50`}
      autoPlay
      loop
      muted
      controls
    >
      <source src={src} type="video/mp4" className=" rounded-2xl" />
    </video>
  );
};

export default Video;
