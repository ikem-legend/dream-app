import {createContext} from "react";

type Dream = {
  firstName: string
  dreamDesc: string
}

type DreamContextType = [
  Dream[],
  (dream: Dream[]) => void
]

const dreamDB: Dream[] = []
const DreamContext = createContext<DreamContextType>([dreamDB, () => {}])

export default DreamContext