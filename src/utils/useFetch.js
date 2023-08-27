import { useEffect, useState } from "react";
import Papa from "papaparse";
const fs = require("fs");
csvData = fs.readFileSync("./planet_data.csv")
const useFetch = () => {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    const fetchParseData = async () => {
        Papa.parse(csvData, {
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
