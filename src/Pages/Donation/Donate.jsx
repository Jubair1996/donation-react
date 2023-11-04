import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Donate = ({ donate }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
  } = donate;
 
  return (
    <Link to={`/donate/${id}`} state={category}>
      <div className="relative h-96 flex flex-col rounded-xl bg-white  bg-clip-border text-gray-700 shadow-md" style={{backgroundColor:card_bg_color}}>
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img className="w-full" src={picture} alt="ui/ux review check" />
        </div>
        <div className="p-6 " style={{color: text_color}}>
          <h4 className="block w-36 text-center px-4 py-1 rounded font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased" style={{backgroundColor:category_bg_color}}>
            {category}
          </h4>
          <h4
            className={`block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased`}
          >
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
};
Donate.propTypes = {
  donate: PropTypes.object,
};
export default Donate;
