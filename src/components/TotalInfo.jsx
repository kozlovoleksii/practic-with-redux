export const TotalInfo = ({cardList}) => {
  return (
    <div className="total-info">
      <h4>Total info:</h4>
      Total Price:{" "}
      {cardList.reduce((total, item) => total + item.price * item.count, 0)}
      <br />
      Total count: {cardList.reduce((total, item) => total + item.count, 0)}
    </div>
  );
};
