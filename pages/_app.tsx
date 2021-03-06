import "../styles/globals.css";
import "antd/dist/antd.css";
import "../styles/heart.css";

import "containers/Footer/Footer.css";
import Head from "next/head";
import { useEffect, useReducer, useState } from "react";
import { Button, Input } from "antd";
import { delay } from "utils";
import AuthProvider from "hooks/AuthContext";
import LayoutProvider from "hooks/LayoutContext";
import cartItems from "mock/cart.json";
import AppProvider from "hooks/AppContext";
import createPersistedState from "packages/use-persisted-state";
import CartProvider, { cartReducer } from "hooks/CartContext";

export const useAppState = createPersistedState("app");
const useAuthState = createPersistedState("auth");
const useCartState = createPersistedState("cart");

export const initalAppState = {
  shopFilters: {
    sort: -1,
    tags: [],
  },
};

const initialAuthState = {
  authenticated: false,
};

const initialCartState = {
  cart: [],
};

function MyApp({ Component, pageProps }) {
  const [appState, setAppState] = useAppState(initalAppState);
  const [state, setState] = useState({
    cartVisible: false,
    filterVisible: false,
  });
  const [authState, setAuthState] = useAuthState(initialAuthState);
  const [cartState, setCartState] = useCartState(initialCartState, cartReducer);

  const { authenticated } = authState;

  const [appLoading, setAppLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [password, setPassword] = useState("");

  const setAuthenticated = (authenticated: boolean) =>
    setAuthState({ ...authState, authenticated });

  const handleAppCheckPassword = async () => {
    setLoading(true);
    setIsWrongPassword(false);
    try {
      await delay(1000);
      const response = await fetch("/api/validate-session", {
        method: "POST",
        body: JSON.stringify({ password }),
      });
      const { authenticated } = await response.json();

      setAuthenticated(authenticated);
      setIsWrongPassword(!authenticated);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setAppLoading(false);
  }, []);

  if (appLoading) return null;

  if (!authenticated) {
    return (
      <>
        <div
          className="h-screen"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/9509654/pexels-photo-9509654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
            filter: "blur(5px)",
          }}
        ></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-2xl text-white text-center">Opening Soon</p>
          <div className="max-w-xl">
            <Input
              type="password"
              placeholder="Input page password"
              className="!max-w-xl !bg-transparent !p-5 text-center !text-white"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAppCheckPassword()}
              disabled={loading}
            />
            {isWrongPassword && (
              <p className="mt-2 text-white text-center">
                Wrong password. Try again.
              </p>
            )}
            <Button
              type="primary"
              className="mt-2 !p-7 w-full !flex !items-center !justify-center !text-black !border-white !bg-white"
              onClick={() => handleAppCheckPassword()}
              loading={loading}
            >
              Submit
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/solid.css"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <AuthProvider state={[authState, setAuthState]}>
        <AppProvider state={[appState, setAppState]}>
          <CartProvider state={[cartState, setCartState]}>
            <LayoutProvider state={[state, setState]}>
              <Component {...pageProps} />
            </LayoutProvider>
          </CartProvider>
        </AppProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
