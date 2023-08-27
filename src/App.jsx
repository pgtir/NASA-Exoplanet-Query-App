import QueryPanel from "./components/QueryPanel";
import { Stack, Typography } from "@mui/material";
import DataTable from "./components/DataTable";
import { useState } from "react";
import Fallback from "./components/Fallback";

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
        <DataTable results={results} setResults={setResults}  />
      ) : (
        <Fallback/>
      )}
    </Stack>
  );
}

export default App;
