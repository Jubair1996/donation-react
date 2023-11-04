import PropTypes from "prop-types";
const DonationCard = ({ donate }) => {
  const {
    picture,
    title,
    category_bg_color,
    text_color,
    category,
    card_bg_color,
    button_bg_color
  } = donate;
  return (
    <div>
      <div
        className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        style={{ backgroundColor: card_bg_color }}
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6
            className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased w-32 px-2 py-1 text-center rounded"
            style={{ backgroundColor: category_bg_color }}
          >
            {category}
          </h6>
          <h4
            className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            style={{ color: text_color }}
          >
            {title}
          </h4>

          <button
            className="px-6 py-2 rounded text-white font-medium"
            style={{ backgroundColor: button_bg_color }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
DonationCard.propTypes = {
  donate: PropTypes.object,
};
export default DonationCard;
