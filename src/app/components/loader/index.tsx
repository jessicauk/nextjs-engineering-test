import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
  return (
    <Box>
      <CircularProgress className="text-red-600" />
    </Box>
  );
}
