import React, {FC, useContext} from "react"
import {Link} from "@reach/router";
import {DreamContext, DreamData} from "../context/DreamContext";

const DreamDatabase: FC = () => {
  const {dreams} = useContext(DreamContext)
  const deleteDream = (idx: number): void => {
    dreams.splice(idx, 1)
  }

  return (
    <div className="grid-rows-1 mt-5">
      <div className="grid-cols-1 p-5">
        {dreams.length ? (
          <table className="dream-db table-fixed">
            <thead>
              <tr>
                <th className="w-4/12" />
                <th className="w-4/12" />
                <th className="w-2/12" />
                <th className="w-2/12" />
              </tr>
            </thead>
            <tbody className="px-10">
              {dreams.length ? dreams.map((dreamDetails: DreamData, idx: number) => (
                <tr key={idx}>
                  <td>{dreamDetails.dreamDesc}</td>
                  <td>{dreamDetails.firstName}</td>
                  <td><button onClick={() => deleteDream(idx)} className="btn">Delete</button></td>
                  <td><button className="btn"><Link to={`/details/${idx}`}>View</Link></button></td>
                </tr>
              )) : null}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  )
}

export default DreamDatabase