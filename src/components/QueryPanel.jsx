import { Stack } from "@mui/material";
import Buttons from "./Buttons";
import InputList from "./InputList";
import { useState } from "react";

const QueryPanel = ({ planetData }) => {
  const [input, setInput] = useState({
    hostname: "",
    discoverymethod: "",
    disc_year: "",
    disc_facility: ""
  });
  return (
    <Stack
      mb={5}
      sx={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "18px",
      }}
    >
      <InputList planetData={planetData} input={input} setInput={setInput} />
      <Buttons setInput={setInput} />
    </Stack>
  );
};

export default QueryPanel;
