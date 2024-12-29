import Button from "./ui/Button";

const AddToChromeBtn = () => {
  const handleAddToChrome = () =>
    window.open(
      "https://chromewebstore.google.com/detail/Fav%20AI%20Chat/jefajcbalihnbdeogjkokdlolbfmpkbp",
      "_blank"
    );
  return <Button onClick={handleAddToChrome}>Add to chrome</Button>;
};

export default AddToChromeBtn;
