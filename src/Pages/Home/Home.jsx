import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Donate from "../Donation/Donate";
const Home = () => {
    const donation = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 mx-4">
                {
                    donation.map(donate => <Donate key={donate.id} donate={donate}></Donate> )
                }
            </div>
        </div>
    );
};

export default Home;