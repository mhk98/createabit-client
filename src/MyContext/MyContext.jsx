// import { createContext, useContext, useReducer } from "react";

// const MyContext = createContext();

// const myReducer = (state, action) => {
//   switch (action.type) {
//     case "UPDATE_CART":
//       return { ...state, cart: action.payload };
//     // ... other cases if needed
//     default:
//       return state;
//   }
// };

// const MyContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(myReducer, {
//     cart: [] /* other initial state properties */,
//   });

//   const updateData = (data) => {
//     dispatch({ type: "UPDATE_CART", payload: data.cart });
//     console.log("Updated Data:", data); // Log the updated data to the console
//     // ... dispatch other actions if needed
//   };

//   const contextValue = {
//     state,
//     updateData,
//   };

//   return (
//     <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
//   );
// };

// const useMyContext = () => {
//   const context = useContext(MyContext);
//   if (!context) {
//     throw new Error("useMyContext must be used within a MyContextProvider");
//   }
//   return context;
// };

// export { MyContextProvider, useMyContext as default};
