import styled from "styled-components";
import LinkComponent from './Linkcomponent'
//import Projectlinkwrapper from "./Projectlinkwrapper";
const Listwrapper = styled.li`
  listwrapperst-style: none;
  display: flex;
  justify-content: space-between;
`;
const Ulistwrapper = styled.ul`
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 40px;
`;

// const AnchorWrapper = styled.a`
//   text-decoration: none;
//   color: blue;
// `;
function List({ items }) {
  // render() {
  return (
    <Ulistwrapper>
      {items.map((items) => (
        <Listwrapper>
          <strong>{items.label}</strong>
          {items.value && items.value.includes('https://')? (
            <LinkComponent hrefValue={items.value} title={items.value} />
          ) : (
            <span>{items.value}</span>
          )}
        </Listwrapper>
      ))}
    </Ulistwrapper>
  );
  //}
}
export default List;


//class List extends Component{
//this.prop.items

//}
