import { createContext, useState } from "react";
// 1. Crear el contexto
// Esta es el qeu tenemos que consumir
export const FiltersContext = createContext();
// 2. Crear el provicer, para proveer el contexto
// Este es el que nos provee el acceso al contexto
export function FilteProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });
  return (
    <FiltersContext.Provider
      //   value={{
      //     category: "all",
      //     minPrice: 0,
      //   }}
      value={{ filters, setFilters }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
