import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDonate from "./SingleDonate";

const SingleCardDonate = () => {
  const [donate, setDonate] = useState({});

  const { id } = useParams();
  const donates = useLoaderData();

  useEffect(() => {
    const findDonate = donates?.find((donates) => donates.id === id);
    setDonate(findDonate);
    console.log(findDonate);
  }, [id, donates]);
  return (
    <div>
      <SingleDonate donate={donate}></SingleDonate>
    </div>
  );
};

export default SingleCardDonate;
