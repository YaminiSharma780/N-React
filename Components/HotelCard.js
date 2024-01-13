import "../index.css";

export default function HotelCard(props) {
  // const { hotelName, dishName, rating } = props; //destructuring of object 'props'
  console.log("props : ", props); //All Objects
  console.log("typeof props : ", typeof props); //Object
  const { food } = props;
  const { hotelId, imageUrl, hotelName, dishName, rating } = food;
  return (
    <span className="hotel-card">
      <img className="cardImage" src={imageUrl} alt="" />
      <h4 style={{ margin: 0 }}>{hotelName}</h4>
      <p style={{ margin: 0 }}>{dishName}</p>
      <h4 style={{ margin: 0 }}>{rating}</h4>
    </span>
  );
}
