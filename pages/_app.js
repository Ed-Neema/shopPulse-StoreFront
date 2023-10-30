import { CartContextProvider } from "@/context/CartContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap');
//   body{
//     background-color: #eee;
//     padding:0;
//     margin:0;
//     font-family: 'Barlow', sans-serif;
//   }
// `;
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <GlobalStyles /> */}
      <CartContextProvider>
        <Component {...pageProps} />
        <Toaster />
      </CartContextProvider>
    </>
  );
}
