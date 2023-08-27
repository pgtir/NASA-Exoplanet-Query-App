import { Stack, Typography } from '@mui/material'

const Fallback = () => {
  return (
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
  )
}

export default Fallback