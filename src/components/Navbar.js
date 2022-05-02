import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavLink } from '../styled_components/NavBarStyle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar () {


    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
                <Typography variant="h6"component="div" sx={{ flexGrow: 1 }} >
                    <NavLink to="/">Home</NavLink>
                </Typography>
            <Typography variant="h6" >
            <NavLink to="/Candies">Candies</NavLink>
          </Typography>  
          </Toolbar>
        </AppBar>
      </Box>
       
   
    )
}

export default Navbar;