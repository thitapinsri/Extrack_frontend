import './NewActivity.css'
import { useState } from 'react'
import ActivityForm from '../../components/ActivityForm/ActivityForm'
const NewActivity = () => {

  return (
    <>
    <div className="new-activity">
      <h1>New Activity</h1>
      <ActivityForm />
    </div>
    </>
  )
}

export default NewActivity