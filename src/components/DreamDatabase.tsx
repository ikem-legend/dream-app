import React, {FC, useContext, useEffect} from "react"
import DreamContext, {Dream} from "../context/DreamContext";

const DreamDatabase: FC = () => {
  const [dreams, setDreams] = useContext(DreamContext)
  useEffect(() => {
    console.log(dreams)
    setDreams(dreams)
  }, [dreams, setDreams])
  const deleteDream = (idx: number): void => {
    dreams.splice(idx, 1)
    setDreams(dreams)
    console.log(dreams)
  }

  return (
    <div className="grid-rows-1 mt-5">
      <div className="grid-cols-1 p-5">
        {dreams.length ? (
          <table className="dream-db table-fixed">
            <thead>
              <tr>
                <th className="w-6/12" />
                <th className="w-4/12" />
                <th className="w-2/12" />
              </tr>
            </thead>
            <tbody className="px-10">
              {dreams.length ? dreams.map((dreamDetails: Dream, idx: number) => (
                <tr key={idx}>
                  <td>{dreamDetails.dreamDesc}</td>
                  <td>{dreamDetails.firstName}</td>
                  <td><button onClick={() => deleteDream(idx)} className="btn">Delete Dream</button></td>
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