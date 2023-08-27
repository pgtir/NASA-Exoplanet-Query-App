import { Clear, Search } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

const Buttons = ({ setInput }) => {

  const handleClearData = () => {
    setInput({
      hostname: "",
      discoverymethod: "",
      disc_year: "",
      disc_facility: "",
    });
  };
  
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ gap: "14px" }}>
      <Button
        sx={{ width: "85px", textTransform: "none" }}
        variant="contained"
        size="small"
        startIcon={<Search />}
      >
        Search
      </Button>
      <Button
        onClick={handleClearData}
        sx={{ width: "85px", textTransform: "none" }}
        variant="contained"
        size="small"
        startIcon={<Clear />}
      >
        Clear
      </Button>
    </Stack>
  );
};

export default Buttons;
