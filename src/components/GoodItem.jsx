import { useDispatch } from "react-redux";
import { addToCard } from "../store/goodsSlicer";

export const GoodItem = ({ good}) => {
const dispatch = useDispatch()

  return (
    <li className="goods-item" key={good.id}>
      {good.title}, memory: {good.memory}GB, color: {good.color}, PRICE:{" "}
      {good.price}$ <button onClick={() => dispatch(addToCard(good))}>Add</button>
    </li>
  );
};
