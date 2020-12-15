import {createContext} from "react";

export type Dream = {
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