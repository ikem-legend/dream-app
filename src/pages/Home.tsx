import React, {FC} from "react"
import {RouteComponentProps} from "@reach/router"
import DreamInput from "../components/DreamInput";
import DreamDatabase from "../components/DreamDatabase";

const Home: FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <div>
      <h1 className="text-center text-3xl">Hi, Welcome to my DreamWorld</h1>
      <h2 className="font-bold text-center text-2xl m-4">What did you dream last night?</h2>

      <DreamInput />
      <DreamDatabase />
    </div>
  )
}

export default Home