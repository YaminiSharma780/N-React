import "../index.css";
export default HeadingComponent = () => {
  return (
    <div className="header">
      <span className="logo">MyLogo</span>
      <span className="headerContent">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Cart</span>
      </span>
    </div>
  );
};
