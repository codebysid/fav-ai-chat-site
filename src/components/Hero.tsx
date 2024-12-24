import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-10">
      <h1 className=" text-7xl font-bold flex flex-col justify-center items-center">
        <span>Access your favorite</span>
        <span className=" text-primary">ChatGPT chats easily</span>
      </h1>
      <Button>Add to chrome</Button>
    </div>
  );
};

export default Hero;
