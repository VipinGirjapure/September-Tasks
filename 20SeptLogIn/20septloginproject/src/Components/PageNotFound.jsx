import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Page Not Found</h1>
      <Box>
        <Button
          size="small"
          sx={{ justifyContent: "center", width: "100%" }}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </Box>
    </>
  );
};
export default PageNotFound;
