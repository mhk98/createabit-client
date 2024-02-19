// // userContext.js
// import { createContext, useContext, useEffect, useState } from "react";
// import { useCookies } from "react-cookie";

// const UserContext = createContext();

// export function UserProvider({ children }) {
//   const [cookies, setCookie, removeCookie] = useCookies(["token"]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if the user is authenticated when the app loads
//     const token = cookies.token;
//     console.log("token", token);
//     if (token) {
//       // Make a request to your API to validate the token and fetch user data
//       // Set user data if authenticated, or remove the token if not
//     }
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser, setCookie, removeCookie }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export function useUser() {
//   return useContext(UserContext);
// }
