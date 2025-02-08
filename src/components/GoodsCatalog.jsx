import {GoodItem } from "./GoodItem"

export const GoodsCatalog = ({goodsList}) => {
    return (
        <div className="gooods-container">
        <ul className="goods-list">
          {goodsList.map((item) => (
            <GoodItem good={item} key={item.id}/>
          ))}
        </ul>
      </div>
    )
}