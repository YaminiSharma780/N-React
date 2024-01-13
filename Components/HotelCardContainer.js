import "../index.css";
import HotelCard from "./HotelCard";
import food from "../StaticData/food";

export default function HotelCardContainer() {
  return (
    <div className="hotel-card-container">
      {food.map((foodItem) => (
        <HotelCard key={foodItem.hotelId} food={foodItem} />
      ))}
      {/* {food.map((foodItem, index) => (
        <HotelCard key={index} food={foodItem} />
      ))} */}
      {/* REACT itself says that we should not use index as keys */}
      {/* <HotelCard food={food[0]} /> */}
    </div>
  );
}
