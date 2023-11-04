import Donation from "./Donation";
import PropTypes from 'prop-types';
const Donations = ({donations}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {
            donations.map(donation =><Donation key={donation.id} donation={donation}></Donation>  )
           }
        </div>
    );
};
Donations.propTypes = {
    donations: PropTypes.array.isRequired
  };
export default Donations;