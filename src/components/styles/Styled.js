import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  margin-top: 10px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 800;
    font-size: 85px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 50px;
  }

  .list{
        transition: all ease 0.5s;
        
    }

   &:hover div{
       opacity: 1;
   }

   .row-left, .row-right{
    position: absolute;
    width: 40px;
    height: 420px;
    background-color: rgba(0,0,0,0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
    @media (max-width: 760px){
        opacity: 1;
    }
   }

   .row-left{
    left: 0;
   }

   .row-right{
       right: 0;
   }

   .navigate-before, .navigate-next{
        font-size: 50px;
    }
`;

export const Card = styled.div`
  
  background-color: #000000;
  border-radius: 3px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  margin: 1rem;
  width: 250px;

  img {
  max-width: 100%;
  max-height: 100%;
    &:hover {
      opacity: 60%;
      cursor: pointer;
    }
}

.movie-info h5 {
  margin: 0;
  font-size: 15px;
}

.movie-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.tag {
  background-color: #181B19;
  border-radius: 5px;
  padding: 0.5rem;
  margin-left: 10px;
  width: 80px;
  display: flex;
  justify-content: center;
  font-size: 14.5px;
  height: 40px;
}

.sub-info{
  display: flex;
  align-items: center;
  margin-top: 8px;
}
`;

export const Release = styled.section`
  overflow-x: hidden;
    margin-top: 60px;

    
  h1{
    margin-top: 70px;
    margin-left: 30px;
    font-family: 'Pompiere', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    color: #FFFFFF;
    }
`

export const NavBar = styled.nav`
    height: 80px;
    background-color: #000000;
    padding: 0 30px;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .container-fluid{
      background-color: #000000;
    }

    .nav-item{
    font-size: 25px;
    font-family: 'Pompiere', cursive;
    font-style: normal;
    font-weight: normal;
    margin: 10px;
    }

    h3{
    padding: 10px 0 0 0;
    font-family: 'Pompiere', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 37px;
    color: #FFFFFF;
    }

    .shop-item{
      margin: 10px 50px 0 7px;
    }

    .item, .items{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .exit-item{
      margin: 10px 0 0 0;
      cursor: pointer;
    }

    h2{
        margin-top: 20px;
        font-size: 25px;
        font-family: 'Pompiere', cursive;
        font-style: normal;
        font-weight: normal;
    }


    @media (max-width: 770px){
      padding: 0 0px;
      .container-fluid{height: 100px;}
      .nav-item{font-size: 15px;}
    }

`

export const DetailMovie = styled.section`
    margin: 100px 100px;
    font-size: 18px;

    h4, h3{
      font-family: 'Pompiere';
      font-size: 37px;
    }

    .back-shop-item{
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 15px;
      width: 200px;
      height: 170px;
      display: flex;
      align-items: center;
      justify-content: center;

      .price{
        background-color: #181B19;
        width: 100px;
        height: 40px;
        font-size: 20px;
        text-align: center;
        border-radius: 5px;
        padding: 5px 0 0 0 ;
      }

      span{
        font-family: 'Pompiere';
        font-size: 25px;
      }
    }

    .featured--buttons{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .recommend-info{
      display: flex;
      flex-direction: column;
      padding: 0 30px 0 30px;
    } 


    .recommend{
      display: flex;
      align-items: center;
      margin-bottom: 100px;
      background-color: black;
      padding: 20px;
      border-radius: 10px;
    }

    .recommend-title{
      margin: 0 0 50px 0;
    }

    .genres{
      margin-bottom: 60px;
    }

    .feactured--description{
      margin-bottom: 50px;
    }

    .first-block{
      margin: 30px 0 50px 0;
    }

    h2{
      font-family:'Pompiere';
      font-size: 50px;
    }

    .info-principal{
      display: flex;
      justify-content: space-between;
    }

    img{
      border-radius: 5px;
      margin: 7px; 
    }
    .cast{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 100px;
      div{
        display: flex;
        flex-direction: column;
      }
    }

    .cast-info{
      display: flex;
      justify-content: center;
      text-align: center;
      border-radius: 5px;
      background-color: grey;
      color: black;
      width: 160px;
      margin: 10px;
    }
    @media(max-width: 1000px){
      .recommend{flex-direction: column;}
      .recommend-info{margin-top: 15px;}
    }

`

export const CheckoutStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0 0 0;

    h1{
      font-family:'Pompiere';
      font-size: 70px;
      margin: 20px;
    }

    .shop-item-list{
      background-color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: solid grey 2px;
      margin: 10px 100px 0 0;
      padding: 10px;
    }

    .price{
      border-radius: 5px;
      text-align: center;
      background-color: #181B19;
      width: 100px;
      height: 35px;
      padding: 5px 0 0 0;
    }

    .movie-name{
      margin: 4px 0 0 0;
      font-size: 20px;
    }

    .total-price{
      text-align: center;
      font-size: 35px;
      background-color: black;
      color: white;
      margin-top: 10px;
      border: solid grey 2px;
    }

    .list-item{
      padding-right: 100px;
      display: flex;
      flex-direction: column;
    }

    .checkout-container{
      margin: 20px 0 30px 0;
      display: flex;
      justify-content: space-between;
    }

    @media(max-width: 950px){
      .shop-item-list{
        margin-left: 70px;
      }
    section{ 
      flex-direction: column;
      align-items: center;
    }
  }
`

export const LatestOrder = styled.section`
    margin: 130px 0 70px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1{
      font-family: 'Pompiere';
      font-size: 50px;
      margin-bottom: 20px;
    }

    .purchase{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
      width: 600px;
      border: solid grey 2px;
      padding: 30px;
      background-color: black;
      font-size: 20px;
    }

    .purchase-number{
      margin: 0 0 40px 0;
      font-family: 'Pompiere';
      font-size: 45px;
    }

    .purchase-info{
      text-align: center;
    }

    .total-price{
      color: black;
      background-color: white;
      width: 230px;
      height: 55px;
      text-align: center;
      margin: 10px 0 0 0;
      padding: 10px 0 0 0;
      border-radius: 5px;
      font-size: 28px;
    }
`