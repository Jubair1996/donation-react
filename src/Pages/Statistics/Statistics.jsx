import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Statistics = () => {
    const [statistics, setStatistics] = useState([]);
    
    useEffect(()=>{
        const donateItems = JSON.parse(localStorage.getItem("donate"));
        setStatistics(donateItems)
    },[])
  const data = [
    ["Donations", "Donation Values"],
    ["Your Donations", statistics?.length],
    ["Total Donation", 12],
  ];

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default Statistics;
