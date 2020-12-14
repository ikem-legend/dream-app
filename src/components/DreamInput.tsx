import React from "react"
import {useForm} from "react-hook-form";

const DreamInput = () => {
  const {register, handleSubmit, errors} = useForm()
  const saveDream = (): void => {
    console.log('dream')
  }

  return (
    <div className="grid-rows-1">
      <div className="grid-cols-1 p-5">
        <form onSubmit={handleSubmit(saveDream)} className="dream-form px-10">
          <div className="mb-5">
            <input name="firstName" type="text" ref={register({required: true, pattern: /[A-Za-z]{3,}/, minLength: 3})} placeholder="First Name" />
            <div className="text-red-300">{errors.firstName?.type === "required" && "Your first name is required"}</div>
            <div className="text-red-300">{errors.firstName?.type === "pattern" && "Please enter valid first name"}</div>
            <div className="text-red-300">{errors.firstName?.type === "minLength" && "First name must be a minimum of 3 letters"}</div>
          </div>
          <div>
            <textarea name="dream" ref={register({required: true, minLength: 5})} placeholder="Type your message here" />
            <div className="text-red-300">{errors.dream?.type === "required" && "Please enter dream description"}</div>
            <div className="text-red-300">{errors.dream?.type === "minLength" && "Dream description must be a minimum of 5 letters"}</div>
          </div>
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default DreamInput