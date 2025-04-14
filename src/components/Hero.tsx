import AddToChromeBtn from "./AddToChromeBtn";

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row md:flex-row justify-around lg:justify-between md:justify-between items-start lg:items-end md:items-end min-h-screen pb-10 px-10 grid-background z-0">
      <div className="flex flex-col justify-end items-start gap-5 lg:gap-4 z-40">
        <img
          src="/peerlist_launch.svg"
          alt="peerlist launch badge"
          className="w-[20%] py-2 lg:py-0"
        />
        <h1 className="text-3xl lg:text-6xl font-bold flex flex-col justify-center items-start">
          <span>Access your favorite</span>
          <span className=" text-primary">ChatGPT chats easily</span>
        </h1>
        <p className=" lg:text-xl text-foreground/50 w-[90%] lg:w-[55%]">
          A Chrome Extension that lets you mark your ChatGPT chats as favorites
          for quick access
        </p>
      </div>
      <div className="lg:absolute pulse-effect rounded-full bottom-20 right-20">
        <AddToChromeBtn />
      </div>
    </div>
  );
};

export default Hero;
