import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CandyContainer, CardContainer } from '../styled_components/CandyListStyle';
import CandyItem from './CandyItem';

function CandyList ({candies}){

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin:"10px",
        borderRadius:"25px"
      }));

    const CandyCard = candies.map(candy => 
                <CardContainer>    
                    <CandyItem 
                    key={candy.id}
                    candy={candy}
                    />
                </CardContainer>
         )

    return(
        <>
        <CandyContainer>{CandyCard}</CandyContainer>
        
        </>
    )
    
}
export default CandyList;