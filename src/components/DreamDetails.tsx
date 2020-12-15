import React, {FC, useState, useContext} from "react"
import {useParams} from "@reach/router";
import {DreamContext} from "../context/DreamContext";

const DreamDetails: FC = () => {
  const [dreamExists, setDreamExists] = useState(false)
  const {dreams} = useContext(DreamContext)
  const {id} = useParams()
  const dreamData = dreams[id]
  if (dreamData) setDreamExists(true)
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
        <div className="border-2 border-gray-400 rounded mb-4">
          Dream Details
          <h3 className="text-2xl my-2">First Name: <span className="font-bold">{dreamData.firstName}</span></h3>
          <h3 className="text-xl my-2">Description</h3>
          <p>{dreamData.dreamDesc}</p>
          <h3 className="text-xl my-2">Recommendation</h3>
          <p>{dreamData.analysis}</p>
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