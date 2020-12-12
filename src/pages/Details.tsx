import React/*, {FC}*/ from 'react'
import {RouteComponentProps} from '@reach/router'

interface InvoiceProps extends RouteComponentProps
{
  dreamId?: string;
}

const Details = (props: InvoiceProps) => {
  return (
    <div>Details</div>
  )
}

export default Details