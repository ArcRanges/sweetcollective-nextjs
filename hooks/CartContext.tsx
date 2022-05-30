import { createContext, useContext } from "react";

const CartContext = createContext({} as any);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCartContext must be used in a context");
  return context;
};

export const cartReducer = (state: ICartState, payload: any) => {
  switch (payload.type) {
    case "ADD_TO_CART": {
      const id = payload.item.id;
      const item = state.cart.find((cartItem: any) => cartItem.id === id);

      // item exists in cart, update quantity
      if (item) {
        const newCart = state.cart.map((cartItem: any) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return { ...state, cart: newCart };
      }

      // add non-existing item
      return { ...state, cart: [...state.cart, payload.item] };
    }
    case "REMOVE_ITEM": {
      // remove only if item exists, otherwise do nothing
      const id = payload.id;
      const item = state.cart.find((cartItem: any) => cartItem.id === id);
      if (item) {
        const newCart = state.cart.filter((item: any) => item.id !== id);
        return { ...state, cart: newCart };
      }
    }
    case "CHANGE_QUANTITY": {
      // remove only if item exists, otherwise do nothing
      const { id, type, isCustom = false, quantity } = payload;
      const newCart = state.cart
        .map((cartItem: any) => {
          if (cartItem.id === id) {
            cartItem.quantity = isCustom
              ? quantity
              : cartItem.quantity + quantity;
          }
          return cartItem;
        })
        .filter((cartItem: any) => cartItem.quantity > 0);
      return { ...state, cart: newCart };
    }
    default:
      throw new Error("API not found");
  }
};

export default function CartProvider({ children, state }) {
  return (
    <CartContext.Provider value={[...state]}>{children}</CartContext.Provider>
  );
}
