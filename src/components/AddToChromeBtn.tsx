import Button from "./ui/Button";

interface IAddToChromeBtn {
  className: string;
}

const AddToChromeBtn = ({ className }: IAddToChromeBtn) => {
  const handleAddToChrome = () =>
    window.open(
      "https://chromewebstore.google.com/detail/Fav%20AI%20Chat/jefajcbalihnbdeogjkokdlolbfmpkbp",
      "_blank"
    );
  return (
    <Button onClick={handleAddToChrome} className={className}>
      Add to chrome
    </Button>
  );
};

export default AddToChromeBtn;
