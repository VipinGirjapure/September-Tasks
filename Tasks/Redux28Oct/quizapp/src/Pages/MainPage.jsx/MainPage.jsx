import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";
import { Link } from "react-router-dom";

class MainPage extends Component{
    render(){
        return(<>
        <Box>
            <Link to='/admin'>
            <Button>Admin</Button>
            </Link>
            <Link to="/user">
            <Button>User</Button>
            </Link>
        </Box>
        
        
        </>)
    }
}
export default MainPage;