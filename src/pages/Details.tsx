import React, {FC} from 'react'
import {RouteComponentProps} from '@reach/router'

interface DreamProps extends RouteComponentProps
{
  dreamId?: string;
}

const Details: FC<DreamProps> = (props: DreamProps) => {
  return (
    <div>Details</div>
  )
}

export default Details