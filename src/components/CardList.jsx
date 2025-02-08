import { useDispatch } from "react-redux"
import { addToCard, removeItem, removeOneItemFromCard } from "../store/goodsSlicer"

export const CardList = ({cardList}) => {
    const dispatch = useDispatch()

    return (
        <div className="card-container">
        <h4>Your card goods:</h4>

        <ul className="card-list">
          {cardList.map((item) => (
            <li className="card-item" key={item.id}>
              <div className="btns">
                <button className="btn" onClick={() => dispatch(addToCard(item))}>
                  +
                </button>
                {item.count} шт.
                <button
                  className="btn"
                  onClick={() => dispatch(removeOneItemFromCard(item))}
                >
                  -
                </button>
              </div>
              {item.title}, memory: {item.memory}GB, color: {item.color}{" "}
              <span className="price"> PRICE: {item.price}</span>
              <button className="del-item" onClick={() => dispatch(removeItem(item))}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
}