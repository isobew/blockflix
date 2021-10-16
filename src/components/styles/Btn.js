// import styled from "styled-components";
import styled, { css } from "styled-components";


export const Btn = styled.button`
            /* margin-top: 23px;
            width: 168px;
            height: 56px;
            background: #000000;
            border: 1px solid #000000;
            box-sizing: border-box;
            border-radius: 30px;
            
            font-family: Pompiere;
            font-style: normal;
            font-weight: normal;
            font-size: 30px;
            
            box-shadow: 7px 10px 20px rgba(0, 0, 0, 0.7);
            color: #FFFFFF;
             */
        
  ${(props) => {
    return props.width 
      ? css`
          width: ${props.width};
        `
      : null;
  }}
`;

export const BtnLogin = styled(Btn)`
  width: 253px;
  margin-top: 23px;
  width: 168px;
  height: 56px;
  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 30px;
            
  font-family: Pompiere;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
            
  box-shadow: 7px 10px 20px rgba(0, 0, 0, 0.7);
  color: #FFFFFF;
            
`;

export const BtnRent = styled(Btn)`
  width: 153px;
  margin: 0px 0 10px 30px;
`;

export const BtnCheck = styled(Btn)`
  width: 203px;
  height: 60px;
  margin: 50px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 50px;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.7);
`;

export const BtnDel = styled(Btn)`
  width: 103px;
  background: red;
  color: white;
  border: none;
  border-radius: 50px;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.7);
`;

