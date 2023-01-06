import styled from "@emotion/styled";

export const MoveSite = () => {
    return (
        <Container>
            <Instruction>My website is moved</Instruction>
            <LinkContainer>Go to new
                    <WebLink onClick={()=>window.open("https://soyeongmin.github.io/portfolio", "_self")}>website</WebLink>
            </LinkContainer>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;   
    color: white;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 200;
`

const Instruction = styled.div`
    font-size: 17px;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`
const WebLink = styled.div`
  font-weight: 400;
  cursor: pointer;
  position: relative;
  ::before {
      content: "";
      position: absolute;
      width: 0;
      left: 0;
      top: 20px;
      height: 1.5px;
      background-color: white;
      transition: width ease 0.5s ;
  }
  :hover::before {
    width: 100%;
    background-color: #5accc6;
  }
  :hover {
    color: #5accc6;
  }
`