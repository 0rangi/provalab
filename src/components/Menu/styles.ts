


import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"


export const Menu = styled.menu`
  
 
  display: flex;
  flex-direction: column;
 
div{
background-color: ${colors.thirdL};
position: fixed;

}

 a {
  background-color: ${colors.thirdL};

 } 
 li:hover {
  background-color: ${colors.third};
    }

`