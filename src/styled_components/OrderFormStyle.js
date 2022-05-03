import styled from "styled-components"

export const FormContainer = styled.div` 
font-family: Arial;
  font-size: 17px;
  padding: 8px;


* {
    box-sizing: border-box;
  }

h3{
      color:#FFA07A;
  }
h1{
    color:#FA8072;
}



.row {
    display: -ms-flexbox; 
    display: flex;
    -ms-flex-wrap: wrap; 
    flex-wrap: wrap;
    margin: 0 -16px;
}
label {
    margin-bottom: 10px;
    display: block;
}

input[type=text] {
    width: 100%;
    margin-bottom: 20px;
    background: none;
    border: 1px solid #FFA07A;
    padding: 8px 19px;
    border-radius: 50px;
    letter-spacing: 1px;
  }


.container {
    background-color: #FFFFFF;
    padding: 5px 20px 15px 20px;
    border: 1px solid #000000;
    border-radius: 3px;
  }
  
label{
    float: left;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 15px;
    padding: 0 0 5px 10px;
    display:block;
    margin-bottom: 10px;
  }

.col-25 {
    -ms-flex: 25%; 
    flex: 25%;
  }
  
  .col-50 {
    -ms-flex: 50%; 
    flex: 50%;
  }
  
  .col-75 {
    -ms-flex: 75%; 
    flex: 75%;
  }
  
  .col-25,
  .col-50,
  .col-75 {
  padding: 0 16px;
  }

  
.col-25 {
    -ms-flex: 25%; 
    flex: 25%;
  }
  
  .col-50 {
    -ms-flex: 50%; 
    flex: 50%;
  }
  
  .col-75 {
    -ms-flex: 75%; 
    flex: 75%;
  }
  
  .col-25,
  .col-50,
  .col-75 {
  padding: 0 16px;
  }
  
  img{
    width:80px;
  
  }

  .btn {
    background-color: #FA8072;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
  }

  .subtotal{
    display: flex;
  }

  .total{
    flex:1;
    display:flex; 
  }

.price{
  flex:1;
  padding-top:10px;
  font-size:30px;
  padding-right:90px;
  
}

`
export const  Wrapper = styled.div`

.productdetail{
  flex:2;
  display:flex;

}
.details{
  padding:10px;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
}
.productprice{
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
}

img{
  width:100px;

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