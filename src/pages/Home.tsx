import React/*, {FC}*/ from 'react'
import {RouteComponentProps} from '@reach/router'

const Home = (props: RouteComponentProps) => {
  return (
    <div>
      Hi, Welcome to my DreamWorld
      <div>What did you dream last night?</div>
    </div>
  )
}

export default Home