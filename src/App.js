// import "./App.css";
import Header from "./header";
import Profile from "./profile";
import github from "./github.png"
import Projects from "./project";
// import user from "./user.png";

import { Component } from "react";

class App extends Component {
  //Business Logic
  render() {
    return (
      <>
        <Header user={github} title="User Profile." />
        <Profile />
        <Projects/>
      </>
    );
  }
}

// function App() {
//   const items=[
//     {label:'Name', value:'Ujjwala prachi'},
//     {label:'Html Url', value:'https://github.com'},
//     {label:'BIO', value:'Student'},
//     {label:'Email', value:'khushikaushik51@gmail.com'}
// ];
//   return (

//    <>
//    <Header user={user} title="User Profile."/>
//    <Profile user={user} items={items} />
//    </>
//   );
// }

export default App;
