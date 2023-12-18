// class Cart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [] };
//   }

//   componentDidMount() {
//     // API 호출을 통해 장바구니 데이터를 불러옵니다 (여기서는 더미 데이터를 사용)
//     this.setState({
//       items: [
//         { id: 1, name: "제품 1", quantity: 2, price: 10000 },
//         { id: 2, name: "제품 2", quantity: 1, price: 20000 },
//       ],
//     });
//   }

//   render() {
//     const { items } = this.state;
//     return (
//       <div>
//         {items.map((item) => (
//           <div key={item.id} className="cart-item">
//             <h2>{item.name}</h2>
//             <p>수량: {item.quantity}</p>
//             <p>가격: {item.price}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Cart />, document.getElementById("cartItems"));

// 바닐라 방식
document.addEventListener("DOMContentLoaded", function () {
  const fetchButton = document.getElementById("fetchCart");
  fetchButton.addEventListener("click", function () {
    const userId = document.getElementById("userIdInput").value;
    fetchCartItems(userId);
  });
});

function fetchCartItems(userId) {
  if (!userId) {
    alert("사용자 ID를 입력해주세요.");
    return;
  }

  fetch(`http://localhost:3000/api/cart/${userId}`)
    .then((response) => response.json())
    .then((data) => displayCartItems(data))
    .catch((error) => console.error("Error:", error));
}

function displayCartItems(items) {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = ""; // 이전 내용을 클리어
  items.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `<h2>${item.itemName}</h2><p>수량: ${item.quantity}</p><p>가격: ${item.price}</p>`;
    cartItemsContainer.appendChild(itemElement);
  });
}
