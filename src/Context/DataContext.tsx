import { createContext, PropsWithChildren, useContext } from "react";
import useFetch from "../Hooks/useFecth";

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
}
type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "cartao" | "boleto" | "pix";
  data: string;
  parcelas: number | null;
}

const DataContext = createContext<IDataContext | null>(null)

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error("useData must be used within a DataContextProvider");
  }
  return context;
}

export const DataContextProvider = ({children}: PropsWithChildren) => {

  const {data, loading, error} = useFetch<IVenda[]>('https://data.origamid.dev/vendas/')
  
  return (
    <DataContext.Provider value={{ data, loading, error}}>{children}</DataContext.Provider>
  )
  
} 