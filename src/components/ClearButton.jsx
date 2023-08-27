import { Clear } from "@mui/icons-material";
import { Button } from "@mui/material";

const ClearButton = ({ setInput, setResults }) => {
  const handleClearData = () => {
    setInput({
      hostname: "",
      discoverymethod: "",
      disc_year: "",
      disc_facility: "",
    });
    setResults([]);
  };

  return (
    <Button
      onClick={handleClearData}
      sx={{ width: "85px", textTransform: "none" }}
      variant="contained"
      size="small"
      startIcon={<Clear />}
    >
      Clear
    </Button>
  );
};

export default ClearButton;
