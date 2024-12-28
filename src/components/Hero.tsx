import Button from "./ui/Button";

const Hero = () => {
  const handleAddToChrome = () =>
    window.open(
      "https://chromewebstore.google.com/detail/Fav%20AI%20Chat/jefajcbalihnbdeogjkokdlolbfmpkbp",
      "_blank"
    );
  return (
    <div className=" flex flex-col justify-center items-center gap-10">
      <h1 className=" text-7xl font-bold flex flex-col justify-center items-center">
        <span>Access your favorite</span>
        <span className=" text-primary">ChatGPT chats easily</span>
      </h1>
      <p className=" text-lg text-foreground/50 w-[65%] text-center">
        A Chrome Extension that lets you mark your ChatGPT chats as favorites
        for quick access
      </p>
      <Button onClick={handleAddToChrome}>Add to chrome</Button>
    </div>
  );
};

export default Hero;
