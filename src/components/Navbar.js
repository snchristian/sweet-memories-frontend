import {React,useContext} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { NavLink } from '../styled_components/NavBarStyle';
import { CartItemsContext } from "../content/cartItems";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


function Navbar ({toggleCartOpen,toggleHidden}) {
    const[cartItems]=useContext(CartItemsContext)


    function getTotalItems (cartItem){
        return cartItem.reduce((prev, currentV) => prev + currentV.quantity,0)
     }

   


    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  style={{backgroundColor: "salmon"}}>
          <Toolbar>
                <Typography variant="h6"component="div" sx={{ flexGrow: 1 }} >
                    <NavLink to="/">Home</NavLink>
                </Typography>
                <Typography variant="h6" >
                    <NavLink to="/Candies" >Candies</NavLink>
                </Typography>
                <Typography variant="h6" >
                    <NavLink to="/Order"className={toggleHidden}>Order</NavLink>
                </Typography>
                <Typography variant="h6" >
                    <NavLink to="/Customers">Customers</NavLink>
                </Typography>
                <IconButton edge="start"  color="inherit" aria-label="menu" onClick={toggleCartOpen}>
                <Badge badgeContent={getTotalItems(cartItems)} color="error">
                    <ShoppingCartIcon />  
                </Badge>
                </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
       
   
    )
}

export default Navbar;