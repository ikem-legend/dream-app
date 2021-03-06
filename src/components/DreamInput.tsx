import React, {useContext} from 'react'
import {useForm} from 'react-hook-form'
import {DreamContext} from '../context/DreamContext'

type DreamFormInputs = {
  firstName: string
  dreamDesc: string
}

const DreamInput = () => {
  const {dispatch, dreams} = useContext(DreamContext)
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    errors,
  } = useForm<DreamFormInputs>()
  const saveDream = (): void => {
    const {firstName, dreamDesc} = getValues()
    dispatch({dreams: [...dreams, {firstName, dreamDesc}]})
    reset()
  }

  return (
    <div className="grid-rows-1">
      <div className="grid-cols-1 p-5">
        <form onSubmit={handleSubmit(saveDream)} className="dream-form px-10">
          <div className="mb-5">
            <input
              name="firstName"
              id="firstName"
              type="text"
              ref={register({
                required: true,
                pattern: /^[A-Za-z]{3,}$/,
                minLength: 3,
              })}
              placeholder="First Name"
            />
            <div className="errors text-red-300">
              {errors.firstName?.type === 'required' &&
                'Your first name is required'}
            </div>
            <div className="errors text-red-300">
              {errors.firstName?.type === 'pattern' &&
                'Please enter valid first name'}
            </div>
            <div className="errors text-red-300">
              {errors.firstName?.type === 'minLength' &&
                'First name must be a minimum of 3 letters'}
            </div>
          </div>
          <div>
            <textarea
              name="dreamDesc"
              id="dreamDesc"
              ref={register({required: true, minLength: 5})}
              placeholder="Type your message here"
            />
            <div className="errors text-red-300">
              {errors.dreamDesc?.type === 'required' &&
                'Please enter dream description'}
            </div>
            <div className="errors text-red-300">
              {errors.dreamDesc?.type === 'minLength' &&
                'Dream description must be a minimum of 5 letters'}
            </div>
          </div>
          <button className="btn submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default DreamInput
