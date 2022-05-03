import styled from 'styled-components'

export const ProductCard = styled.div`
display: flex;
justify-content:space-between;

.productdetail{
    flex:2;
    display:flex;
  
  }
.details{
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
  
  }
.productprice{
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  
img{
    width:200px;
  
  }
  
.productAmount{
    display:flex;
    align-items:center;
  }
  
.productPrice{
    font-size:30px;
    font-weight:200;
  }

.span{
      padding-right:10px;
  }
`

export const Title = styled.h1`
    font-weight:300;
    text-align: center   
`

export const Hr = styled.hr`
    background-color:#FA8072;
    border:none;
    height:1px;
`