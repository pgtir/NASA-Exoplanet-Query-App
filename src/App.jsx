import QueryPanel from "./components/QueryPanel";
import { Stack, Typography } from "@mui/material";
import DataTable from "./components/DataTable";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);
  return (
    <Stack sx={{ height: "100vh", py: 2, px: 5 }}>
      <Typography
        mb={3}
        variant="h6"
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        NASA Exoplanet Query
      </Typography>
      <QueryPanel setResults={setResults} />
      {results.length ? (
        <DataTable results={results} setResults={setResults} />
      ) : (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "100%",
            border: "2px dotted #698aff",
            borderRadius: "10px",
          }}
        >
          <Typography fontWeight="bold" sx={{ color: "grey" }}>
            Exoplanets are planets outside the solar System
          </Typography>
          <Typography fontWeight="bold" sx={{ color: "#698aff" }}>
            Find your favourite planet !
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}

export default App;
