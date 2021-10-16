import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components';

const ShopButton = styled.div`
    background-color: #181B19;
    border-radius: 5px;
    padding: 0.5rem;
    margin-left: 10px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 60%;
        cursor: pointer;
    }
`

export default function ShoppingButton({onClick}){
    return (
        <>
        <ShopButton>
            <ShoppingCartIcon onClick={onClick}/>
        </ShopButton>
        </>
    )
}
