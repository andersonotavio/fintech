import { ComponentProps } from "react"

type IDataInput = ComponentProps<"input"> & {
  label: string;
  id: string;
  name: string;
}

export const DataInput = ({label, id, name, ...props}: IDataInput) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type="date" {...props} />
    </div>
  )
}

export default DataInput;