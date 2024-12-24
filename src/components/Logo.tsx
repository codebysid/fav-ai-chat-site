const Logo = () => {
  return (
    <div className=" flex flex-row items-center gap-2">
      <img src="/logo.svg" alt="fav ai chat" className=" h-7 w-7 rounded-lg" />
      <h1 className=" text-xl font-semibold text-foreground/60">Fav AI Chat</h1>
    </div>
  );
};

export default Logo;
