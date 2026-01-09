import { useState } from "react";
import DataInput from "./DataInput"

const DataRange = () => {
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DataInput 
        label="Inicio" 
        id="inicio" 
        name="inicio" 
        value={inicio}
        onChange={({target}) => setInicio(target.value)}
      />
      {inicio}
      <DataInput 
        label="Fim" 
        id="fim" 
        name="fim" 
        value={fim}
        onChange={({target}) => setFim(target.value)}
      />
      {fim}
    </form>
  )
}

export default DataRange;