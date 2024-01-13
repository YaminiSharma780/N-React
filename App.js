import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./Components/Header.js";
import FooterComponent from "./Components/Footer.js";
import SearchBar from "./Components/SearchBar.js";
import HotelCardContainer from "./Components/HotelCardContainer.js";
function BodyComponent() {
  return (
    <>
      <SearchBar />
      <HotelCardContainer />
    </>
  );
}

function RenderingComponent() {
  return (
    <>
      <HeadingComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
}

const parent = <h1 className="heading">I am h1 tag from JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<RenderingComponent />);

// React Element
// const heading = (
//   <div>
//     <h1 className="heading1">Heading Element</h1>
//   </div>
// );

// React Functional Component (Heading)
// const HeadingComponent = () => (
//   <>
//     {/* Component Composition */}
//     {/* <TitleComponent />
//     <MiddleComponent /> */}
//   </>
// );
// // React Functional Component (Title)
// const TitleComponent = () => <h2>Title Component</h2>;
// // React Functional Component (Middle)
// const MiddleComponent = function () {
//   return <h3>Middle Component</h3>;
// };

// const parent = <h1 className="heading">I am h1 tag from JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// root.render(<HeadingComponent />);

// <h1>This heading is coming from React Code</h1>
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This heading is coming from React Code"
// );
// console.log("Heading : ", heading); //prints heading obeject
// root.render(heading); //converts obj heading => h1 tag heading

{
  /* <div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
    <h3>I am h3 tag</h3>
  </div>
</div> */
}
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading1" }, "I am h1 tag"),
//     React.createElement("h2", { id: "heading2" }, "I am h2 tag"),
//     React.createElement("h3", { id: "heading3" }, "I am h3 tag"),
//   ])
// );
// const parent = <h1 className="heading">I am h1 tag from JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
