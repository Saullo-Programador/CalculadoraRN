import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 32px;
    background-color: ${props => props.theme.colors.background};
`

export const ContainerButton = styled.View`
    flex: 1;
    
`


export const BoxButton = styled.View`
    background-color: red;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    width: 100%;
    height: 30%;
`