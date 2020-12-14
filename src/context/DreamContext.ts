import {createContext} from "react";

type Dream = {
  firstName: string
  dreamDesc: string
}

const dreamDB: Dream[] = []
const DreamContext = createContext(dreamDB)

export default DreamContext