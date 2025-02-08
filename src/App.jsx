import { useState } from "react";
import "./App.css";
import { GoodsCatalog } from "./components/GoodsCatalog";
import { CardList } from "./components/CardList";
import { TotalInfo } from "./components/TotalInfo";
import { useSelector } from "react-redux";

const goodsCatalog = [
  { id: 1, title: "Iphone 15", color: "Green", memory: 128, price: 700 },
  { id: 2, title: "Iphone 16", color: "Black", memory: 256, price: 800 },
  { id: 3, title: "Iphone 16 Pro Max", color: "Blue", memory: 512, price: 950 },
];

export const App = () => {
  const [list, setList] = useState(goodsCatalog);
  const cardList = useSelector(state=>state.goods.goods)

  function addToCard(good) {

    // setCardList((prevList) => {
    //   const existingItem = prevList.find((item) => item.id === good.id);

    //   if (existingItem) {
    //     return prevList.map((item) =>
    //       item.id === good.id ? { ...item, count: item.count + 1 } : item
    //     );


    //   } else {
    //     return [
    //       ...prevList,
    //       {
    //         id: good.id,
    //         title: good.title,
    //         memory: good.memory,
    //         color: good.color,
    //         price: good.price,
    //         count: 1,
    //       },
    //     ];
    //   }
    // });
  }

  function removeOneItemFromCard(good) {
    // setCardList((prevList) => {
    //   return prevList
    //     .map((item) =>
    //       item.id === good.id ? { ...item, count: item.count - 1 } : item
    //     )
    //     .filter((item) => item.count > 0); // Видаляємо товар, якщо count = 0
    // });
  }

  function removeItem(itemId) {
    // setCardList((prevList) => prevList.filter((item) => item.id !== itemId));
  }

  return (
    <div className="container">
      <h2>Our Phone catalog</h2>
      <GoodsCatalog goodsList={list}/>

      <CardList 
          cardList={cardList}
      />

      <TotalInfo cardList={cardList}/>
      
    </div>
  );
};

export default App;
