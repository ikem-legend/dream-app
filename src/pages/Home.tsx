import React/*, {FC}*/ from 'react'
import {RouteComponentProps} from '@reach/router'
import DreamInput from "../components/DreamInput";

const Home = (props: RouteComponentProps) => {
  return (
    <div>
      <h1 className="text-center text-3xl">Hi, Welcome to my DreamWorld</h1>
      <h2 className="font-bold text-center text-2xl m-4">What did you dream last night?</h2>

      <DreamInput />
    </div>
  )
}

export default Home