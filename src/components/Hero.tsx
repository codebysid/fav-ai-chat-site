import AddToChromeBtn from "./AddToChromeBtn";

const Hero = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-5 lg:gap-10">
      <h1 className="text-3xl lg:text-7xl font-bold flex flex-col justify-center items-center">
        <span>Access your favorite</span>
        <span className=" text-primary">ChatGPT chats easily</span>
      </h1>
      <p className=" lg:text-lg text-foreground/50 w-[90%] lg:w-[65%] text-center">
        A Chrome Extension that lets you mark your ChatGPT chats as favorites
        for quick access
      </p>
      <AddToChromeBtn />
    </div>
  );
};

export default Hero;
