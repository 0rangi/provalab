import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
 
  display: grid;
  grid-template-columns: 20rem 20rem;
  gap: 4rem;
 
 background-color: ${colors.primary};

 P{
margin: 2rem;
border:2rem;
border-radius: 2rem;
 }

`