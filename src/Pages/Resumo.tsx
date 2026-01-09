import { useData } from "../Context/DataContext"

const Resumo = () => {
  const {data} = useData();

  console.log(data);
  return <div>Resumo Page</div>
}

export default Resumo