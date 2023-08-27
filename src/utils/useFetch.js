import { useEffect, useState } from "react";
import Papa from "papaparse";

const useFetch = () => {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    const fetchParseData = async () => {
        const response = await fetch("src/assets/planet_data.csv");
        const PlanetData = await response.text();
        Papa.parse(PlanetData, {
          header: true,
          complete: (result) => {
            setPlanetData(result.data);
          },
        });
    };
    fetchParseData();
  }, []);

  return planetData;
};

export default useFetch;
