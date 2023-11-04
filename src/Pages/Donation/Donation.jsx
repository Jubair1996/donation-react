import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donate")) || [];
    setDonation(donateItems);
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {donation.slice(0, dataLength).map((donate) => (
          <DonationCard key={donate.id} donate={donate}></DonationCard>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <div className={dataLength === donation.length && 'hidden'}>
          <button
            onClick={() => setDataLength(donation.length)}
            className="bg-green-700 px-6 py-2 my-6 rounded text-white font-semibold text-xl"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
