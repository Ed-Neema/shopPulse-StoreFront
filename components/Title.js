import styled from "styled-components";

const TitleStyle = styled.h1`
  font-size: 2em;
  margin: 0.5em 0;
`;

const Title = ({children}) => {
  return <TitleStyle>{children}</TitleStyle>;
}

export default Title
