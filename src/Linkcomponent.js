import styled from "styled-components";

const AnchorWrapper = styled.a`
  text-decoration: none;
  color: blue;
`;
function LinkComponent({ hrefValue, title}) {
  return (
    <>
      <AnchorWrapper href={hrefValue}>{title}</AnchorWrapper>
      
    </>
    
  );
}
export default LinkComponent;