import { Component } from "react";
import List from "./List";
import styled from "styled-components";
// import items from "./value";
// const ImageWrapper = styled.img`
//   height: 120px;
//   display: flex;
//   justify-content: center;
//   margin-left: 45%;
//   margin-top: 10px;
//   border-radius: 5px;
// `;
// const Listwrapper = styled.li`
//   listwrapperst-style: none;
//   display: flex;
//   justify-content: space-between;
// `;
// const Ulistwrapper = styled.ul`
//   justify-content: center;
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   gap: 10px;
//   padding: 0 40px;
//`;
const AlignCenter = styled.h2`
  text-align: center;
  border-bottom: 5px solid gray;
`;
class Projects extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const projectProfile = await fetch(
      "https://api.github.com/users/octocat/repos"
    );
    const profileJson = await projectProfile.json();
    if (profileJson) {
      this.setState({
        data: profileJson,
        loading: false,
      });
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading....</div>;
    }
    const items = data.map((item) =>( {
        label: item.name,
      value: item.html_url,
    }));

   
  
    // const items = [
    //   { label: "Name", value: data.name },
    //   { label: "Git-consortium", value: data.html_url },
    //   { label: "Hello-world", value: data.location },
    //   { label: "Linguist", value: data.company },
    //   { label: "Octocat-Github.IO", value: data.repos_url },
    //   { label: "Spoon-Knife", value: data.bio },
    //   { label: "Test-Repo1", value: data.email },
    // ];
    // console.log(data);

    return (
      <>
        <AlignCenter>Projects</AlignCenter>
        <List items={items} />
      </>
    );
  }
}
export default Projects;
