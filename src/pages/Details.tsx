import React, {FC} from 'react'
import {RouteComponentProps} from '@reach/router'
import DreamDetails from "../components/DreamDetails";

interface DreamProps extends RouteComponentProps
{
  dreamId?: string;
}

const Details: FC<DreamProps> = (props: DreamProps) => {
  return (
    <div className="container mx-auto">
      <div className="grid-rows-1">
        <div className="grid-cols-1 flex h-screen">
          <DreamDetails />
        </div>
      </div>
    </div>
  )
}

export default Details