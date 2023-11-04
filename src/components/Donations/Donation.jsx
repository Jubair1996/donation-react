import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Donation = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
  } = donation;
  return (
    <Link to={`/donations/${id}`}>
      <div
        style={{
          backgroundColor: card_bg_color,
        }}
        className="relative flex flex-col text-gray-700 my-6 bg-white shadow-md  rounded-xl bg-clip-border"
      >
        <div className="relative h-56 overflow-hidden text-white rounded-xl ">
          <img src={picture} alt="img-blur-shadow" />
        </div>
        <div className="p-6">
          <h5
            style={{
              color: text_color,
              backgroundColor: category_bg_color,
            }}
            className="block font-sans text-base antialiased font-light leading-relaxed text-inherit w-full rounded px-2 mb-4"
          >
            {category}
          </h5>
          <h2
            style={{
              color: text_color,
            }}
            className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};
Donation.propTypes = {
  donation: PropTypes.object.isRequired,
};
export default Donation;
