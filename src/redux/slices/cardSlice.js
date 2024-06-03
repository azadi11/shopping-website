import { createSlice } from "@reduxjs/toolkit";

const setInitialState = () => {
  let totalQTy = 0;
  if (localStorage.getItem("cart")) {
    const productsCard = JSON.parse(localStorage.getItem("cart"));
    totalQTy= productsCard.reduce((total, item) => (total + item.qty),0);
  }
  return totalQTy
};

const cardSlice = createSlice({
  name: "cardSlice",
  initialState: {
    totalQty: setInitialState(),
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },

  reducers: {
    increaseQty: (state, action) => {
      // action :    {
      //                "type": "cardSlice/increaseQty",
      //                "payload": { "id": 1}
      //             }

      const { id, title, price, image, qty } = action.payload;
      state.totalQty++; //stat.totalQTy=state.totalQty+1
      // totalQty++  --->  totalQTy=totalQty+1
      let productsCartList = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      productsCartList = productsCartList.map((item) => {
        if (item.id == id) {
          item.qty++;
        }
        return item;
      });

      const product = productsCartList.find((item) => item.id == id);
      if (!product) {
        productsCartList.push({
          id,
          title,
          price,
          image,
          qty: qty + 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(productsCartList));
      state.cart=productsCartList
    },
    addItem:(state, action)=>{

    },
    decreaseQty:(state, action)=>{

    },
    removeItem:(state, action)=>{

    },
  },
});

export const { increaseQty } = cardSlice.actions;
export default cardSlice.reducer;
