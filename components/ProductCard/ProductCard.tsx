import { createContext, useContext, useState } from "react";
import ProductImageWrapper from "./ProductImageWrapper";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductTitle from "./ProductTitle";

export const ProductCardContext = createContext({} as ProductCardContext);

export const useProductCardContext = () => {
  const context = useContext(ProductCardContext);
  if (!context)
    throw new Error(
      "useProductCardContext must be used within a context object"
    );
  return context;
};

const ProductCardProvider = ({ children, state, handlers }: any) => {
  return (
    <ProductCardContext.Provider value={{ state, handlers }}>
      {children}
    </ProductCardContext.Provider>
  );
};

const ProductContentWrapper = ({ children }) => (
  <div className="w-auto shadow transition-all duration-300 hover:shadow-lg p-2">
    {children}
  </div>
);

export default function ProductCard(props: ProductItem) {
  const [showAddToCart, setShowAddToCart] = useState(false);

  const onMouseEnter = () => setShowAddToCart(true);
  const onMouseLeave = () => setShowAddToCart(false);

  return (
    <ProductCardProvider
      state={{ showAddToCart, ...props }}
      handlers={{ onMouseEnter, onMouseLeave }}
    >
      <ProductContentWrapper>
        <ProductImageWrapper />
        <ProductTitle />
        <ProductRating />
        <ProductPrice />
      </ProductContentWrapper>
    </ProductCardProvider>
  );
}
