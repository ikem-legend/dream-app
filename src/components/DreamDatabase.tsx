import React, {FC, useContext} from 'react'
import {Link} from '@reach/router'
import {DreamContext, DreamData} from '../context/DreamContext'

const DreamDatabase: FC = () => {
  const {dreams, dispatch} = useContext(DreamContext)
  const deleteDream = (idx: number): void => {
    dreams.splice(idx, 1)
    dispatch({dreams: [...dreams]})
  }

  const viewDream = (dreamObj: DreamData): string => {
    const {firstName, dreamDesc} = dreamObj
    const selectedDream = dreams.filter(
      (dreamInfo) =>
        dreamInfo.firstName === firstName && dreamInfo.dreamDesc === dreamDesc,
    )[0]
    const dreamIndex = dreams.indexOf(selectedDream)
    return `/details/${dreamIndex}`
  }

  return (
    <div className="grid-rows-1 mt-5">
      <div className="grid-cols-1 p-5">
        {dreams.length ? (
          <table className="dream-db table-fixed overflow-y-scroll">
            <thead>
              <tr>
                <th className="w-4/12" />
                <th className="w-4/12" />
                <th className="w-2/12" />
                <th className="w-2/12" />
              </tr>
            </thead>
            <tbody>
              {dreams.length
                ? dreams.map((dreamDetails: DreamData, idx: number) => (
                    <tr key={idx}>
                      <td className="pl-2">{dreamDetails.dreamDesc}</td>
                      <td>{dreamDetails.firstName}</td>
                      <td>
                        <button
                          onClick={() => deleteDream(idx)}
                          className="btn w-full"
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <Link to={viewDream({...dreamDetails})}>
                          <button className="btn w-full">View</button>
                        </Link>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  )
}

export default DreamDatabase
