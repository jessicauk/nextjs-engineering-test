import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
  return (
    <Box className="flex flex-col justify-center items-center content-center">
      <CircularProgress className="text-blue-600" />
      <p className="">Loading...</p>
    </Box>
  );
}
