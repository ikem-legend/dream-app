import React, {FC, useState, useContext, useEffect} from "react"
import {useParams} from "@reach/router";
import {DreamContext} from "../context/DreamContext";

const DreamDetails: FC = () => {
  const [dreamExists, setDreamExists] = useState(false)
  const {dreams} = useContext(DreamContext)
  const {id} = useParams()
  const dreamData = dreams[id]
  useEffect(() => {
    if (dreamData) setDreamExists(true)
  }, [dreamData])
  // Create random dream analysis
  const dreamAnalysis = [
    'Good', 'Wonderful', 'Bad', 'Terrible'
  ][Math.floor(Math.random() * 4)]
  if (dreamData) {
    dreamData['analysis'] = dreamAnalysis
  }
  return (
    <div className="m-auto w-3/5">
      {dreamExists ? (
        <div className="border-2 border-gray-400 rounded">
          <div className="grid-rows-1">
            <div className="grid-cols-1 p-5">
              <h2 className="text-3xl font-bold text-center">Dream Details</h2>
              <table className="table-fixed w-full">
                <thead>
                  <tr>
                    <th className="w-4/12" />
                    <th className="w-8/12" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold"><h3 className="text-xl my-2">First Name: </h3></td>
                    <td><span>{dreamData.firstName}</span></td>
                  </tr>
                  <tr>
                    <td className="font-bold"><h3 className="text-xl my-2">Description</h3></td>
                    <td><p>{dreamData.dreamDesc}</p></td>
                  </tr>
                  <tr>
                    <td className="font-bold"><h3 className="text-xl my-2">Recommendation</h3></td>
                    <td><p>{dreamData.analysis}</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-2 border-gray-400 rounded mb-4">
          <h3 className="text-2xl text-center my-2">No Dream found. Please add a dream</h3>
        </div>
      )}
    </div>
  )
}

export default DreamDetails