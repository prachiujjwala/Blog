// import "./App.css";
import { Component } from "react";
import List from "./List"

import styled from "styled-components";
const ImageWrapper = styled.img`
  height: 120px;
  display: flex;
  justify-content: center;
  margin-left: 45%;
  margin-top: 10px;
`;


class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const profile = await fetch("https://api.github.com/users/octocat");
    const profileJson = await profile.json();
    if (profileJson) {
      this.setState({
        data: profileJson,
        loading: false,
      });
    }
  }

  render() {
    const { data, loading } = this.state;
    //console.log(data);
    if (loading) {
      return <div>Loading....</div>;
    }
    const items=[
      {label:'Name', value: data.name},
     {label:'Html Url', value: data.html_url},
     {label:'Location', value: data.location},
     {label:'Comapany', value: data.company},
     {label:'Repos_url', value: data.repos_url},
     {label:'Bio', value: data.bio},
     {label:'Email', value: data.email},
   ];
    
    return (
      <>
      
        <ImageWrapper src={data.avatar_url} alt="avatar image"/>
          
        <List items={items}/>
        

        
        
      </>
    );
  }
}
export default Profile;
