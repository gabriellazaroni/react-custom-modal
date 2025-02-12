import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: var(--black);
  justify-content: center;
  padding-top: 50px;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  background-color: var(--purple);
  color: var(--white);
  cursor: pointer;
  font-weight: bold;
`