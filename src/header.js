
import styled from "styled-components";
const Imagewrapper =styled.img`
height: 150px;
pointer-events: none;
margin-top: 15px;
border-radius: 50%;

`;
const Paragraphwrapper =styled.p`
    margin-top: 0;
    margin-bottom: 0;
`;
const Divwrapper = styled.div`
text-align: center;

`;

const HeaderWrapper =styled.header`
background-color: aqua;
min-height: 30vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;

`;

function Header({user,title}){
    return(
        <>
        <Divwrapper className='App'>
    <HeaderWrapper className='App-header'>
      <Imagewrapper src={user} className='App-logo' alt='logo'/>
      <Paragraphwrapper>
        {title}
      </Paragraphwrapper>
      
    </HeaderWrapper>

   </Divwrapper>
        </>
    );

}
export default Header;