import React, { Dispatch, PropsWithChildren, createContext, useContext, useState } from 'react'

interface ContextValue {
  cart: string,
  setCart: any
}

const StoreContext = createContext<ContextValue>({} as ContextValue)

export function useStore() {
  return useContext(StoreContext)
}

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState("carts")

  const contextValue = {
    cart,
    setCart
  }

  return (
    <StoreContext.Provider value={contextValue}>
      { children }
    </StoreContext.Provider>
  )

}
