import React, { useContext} from 'react'
import { CartItemsContext } from '../content/cartItems';
import Cart from './Cart';
import { styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CandyContainer, CardContainer } from '../styled_components/CandyListStyle';
import CandyItem from './CandyItem';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';




function CandyList ({candies,toggleCart,toggleCartClose}){
    const [cartItems,setCartItems] = useContext(CartItemsContext)
    const theme = useTheme();

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin:"10px",
      borderRadius:"25px"
    }));

    const drawerWidth = 240;

    const CandyCard = candies.map(candy => 
      <Grid item xs={2} key={candy.id}>
          <Item>    
          <CandyItem 
          key={candy.id}
          candy={candy}
          handleAddToCart={handleAddToCart}
           />
          </Item>   
      </Grid> )



      
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
      }));


    

    function handleAddToCart (clickedCandy){
        const exist = cartItems.find(item => item.id === clickedCandy.id)
        if(exist){
          setCartItems((cartItems.map(
            item=> item.id === clickedCandy.id ? {...item,quantity:item.quantity +1}: item)))
           } 
        else {
          
              setCartItems([...cartItems,{...clickedCandy,quantity:1}])
            }
  
        console.log(cartItems)
      }
  
      function handleRemoveFromCart(clickedCandy){
         setCartItems(cartItems.reduce((ack,candy)=>{
          if(candy.id === clickedCandy){
            if(candy.quantity === 1) return ack;
            return[...ack,{...candy,quantity:candy.quantity-1}]
          }else{
            return [...ack,candy]
          }
        },[]))
      }

    return(
        <>
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={toggleCart}
      >
        <DrawerHeader>
            <IconButton onClick={toggleCartClose}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </DrawerHeader>
        <Divider />
            <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/> 
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <CandyContainer>{CandyCard}</CandyContainer>
      </Grid>
      </Box>

      
        </>
    )
    
}
export default CandyList;