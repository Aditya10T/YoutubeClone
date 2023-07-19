import { Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {

 const navigate = useNavigate();

  return(
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />{" "}
      <Typography component="span" color="red" fontSize="20px" ml={2} onClick={()=>navigate('/')}>
        StreamIt
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
)};

export default Navbar;
