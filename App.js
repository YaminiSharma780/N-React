const root = ReactDOM.createRoot(document.getElementById("root"));

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
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I am h1 tag"),
    React.createElement("h2", { id: "heading2" }, "I am h2 tag"),
    React.createElement("h3", { id: "heading3" }, "I am h3 tag"),
  ])
);
root.render(parent);
