import Button from "./ui/Button";

const AddToChromeBtn = () => {
  const handleAddToChrome = () =>
    window.open(
      "https://chromewebstore.google.com/detail/Fav%20AI%20Chat/jefajcbalihnbdeogjkokdlolbfmpkbp",
      "_blank"
    );
  return <Button onClick={handleAddToChrome} className=" lg:h-14 lg:w-72 md:h-14 md:w-72 lg:text-xl md:text-xl font-extrabold">ADD TO CHROME</Button>;
};

export default AddToChromeBtn;
