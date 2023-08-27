import QueryPanel from "./components/QueryPanel";
import { Stack, Typography } from "@mui/material";
import useFetch from "./utils/useFetch";

function App() {
  const planetData = useFetch();

  return (
    <Stack sx={{ height: "100vh", py: 2, px: 5 }}>
      <Typography
        mb={3}
        variant="h6"
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        NASA Exoplanet Query
      </Typography>
      <QueryPanel planetData={planetData} />
    </Stack>
  );
}

export default App;
