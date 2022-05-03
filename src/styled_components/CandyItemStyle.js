import styled from 'styled-components'

export const Card = styled.div`

.card{
    overflow:hidden;
    border-radius:25px;
    box-shadow:0 2px 20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    cursor:pointer;
    transition:transform 200ms ease in;
  }
  
  .body{
    box-sizing:border-box;
    margin:0;
    padding:0;

  }
  
  img{
    height:12rem;
    width:100%;
    object-fit:cover;
  }
  .title{
   padding: 1rem
  }
  .price{
    font-size:2rem;
    margin-top:1rem;
  }
  
  .button{
  border-radius:25px;
    border:2px solid;
    background-color:transparent;
    font-family:inherit;
    font-size: 1rem;
    font-weight:bold;
    color: inherit;
    margin:1rem;
    cursor:pointer;
  }


`