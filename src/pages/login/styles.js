import styled from "styled-components";
import img from '../../components/styles/images/luzespeb.jpg'


export const Container = styled.div`

  background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    /* background-color: #181B19; */
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 753px;
        
  h1{
    margin: 30px;
    font-family: 'Pompiere';
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media(max-width: 700px){
    height: 810px;
    section{ 
      width: 400px;
      height: 430px;

    }

    button{
      margin: 0;
    }
  }

`;


export const LoginBox = styled.section`

  /* rgba(68, 88, 83, 0.7) */
  /* background: rgba(24, 27, 25, 0.7); */
  background: rgba(55, 57, 56, 0.8);
  width: 573px;
  height: 504px;
  border: 2px solid #212320;
  box-sizing: border-box;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.7);
  border-radius: 38px;
        
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
 
  h2 {
    margin-top: 50px;
    padding-left: 65px;
    font-family: Pompiere;
    font-weight: lighter;
    font-size: 50px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #FFFFFF;
            
  }

  //===================

  div {
    width: 350px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .error-message {
    width: 100%;
    height: 20px;
    font-size: 14px;
    color: #ff6e05;
    text-align: center;
  }
//==========================
  input {
    width: 372px;
    height: 49px;
    background: #000000;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 0 20px 0;
            
    outline: 0;
    padding-left: 10px;
    font-family: 'Nova Mono', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.7);
    }
`;

