import PropTypes from "prop-types";
import swal from "sweetalert";
const SingleDonate = ({ donate }) => {
  const {
    id,
    picture,
    title,
    description,
    card_bg_color,
    button_bg_color,
    price,
  } = donate;
  const handleSingleDonate = () => {
    const addDonateArray = [];
    const donateItems = JSON.parse(localStorage.getItem("donate")) || [];
    if (!donateItems) {
      addDonateArray.push(donate);
      localStorage.setItem("donate", JSON.stringify(addDonateArray));
      swal("Good job!", "Your Donate Added", "success");
    } else {
      const isExist = donateItems.find((donate) => donate.id === id);
      if (!isExist) {
        addDonateArray.push(...donateItems, donate);
        localStorage.setItem("donate", JSON.stringify(addDonateArray));
        swal("Good job!", "Your Donate Added", "success");
      } else {
        swal("Error!", "No duplicate !", "error");
      }
    }
  };
  return (
    <div>
      <div
        className="relative w-3/4 mb-10 mx-auto flex flex-col rounded bg-white bg-clip-border text-gray-700 shadow-md"
        style={{ backgroundColor: card_bg_color }}
      >
        <div className="relative h-96 overflow-hidden rounded bg-white bg-clip-border text-gray-700">
          <img src={picture} className="h-full w-full object-cover" />
          <button
            onClick={handleSingleDonate}
            className="z-20 absolute px-6 bottom-6 left-6 py-2 rounded text-white font-medium"
            style={{ backgroundColor: button_bg_color }}
          >
            Donate $ {price}
          </button>
          <div className="h-24 absolute left-0 right-0 bottom-0 bg-black opacity-70 z-10"></div>
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <h1 className="text-black text-2xl font-bold">{title}</h1>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
SingleDonate.propTypes = {
  donate: PropTypes.object,
};
export default SingleDonate;
