import './ActivityForm.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appendErrors, useForm } from 'react-hook-form';
import api from '/configs/api'

export const ActivityForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // const [selectedActivity,setSelectedActivity] = useState([]);

    const onSubmit = async (data) => {
        const response = await api.post('user/activities', data)
        // setSelectedActivity(data)
        console.log(data)
        reset()
        navigate('/user/activities');
    }

    return (
        <div className='activity-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="activity_type">Activity Type</label><br />
                <select
                    {...register("activity_type", { required: true })}
                >
                    <option value="">Select...</option>
                    <option value="cardio">cardio</option>
                    <option value="weight training">weight training</option>
                </select>
                {
                    errors.activity_type &&
                    <p className='error'>Please choose your activity types</p>
                }
                <br />

                <label htmlFor="activity_name">Activity Name</label><br />
                <input
                    type='text'
                    placeholder='type your activity'
                    list='activity_name'
                    {...register("activity_name", { required: true })}
                />
                <datalist id='activity_name'>
                    <option value="run"></option>
                    <option value="bicycle"></option>
                    <option value="ride"></option>
                    <option value="swim"></option>
                    <option value="walk"></option>
                    <option value="hike"></option>
                </datalist>
                {
                    errors.activity_name &&
                    <p className='error'>Please choose your activity</p>
                }
                <br />

                <label htmlFor="date">Date</label><br />
                <input type="date" {...register("date", { required: true })} />
                {
                    errors.date &&
                    <p className='error'>Please enter the date</p>
                }
                <br />
                <label htmlFor="duration">Duration (minutes)</label><br />
                <input
                    type="number"
                    placeholder='type your duration'
                    {...register("duration", { min: { value: 1 }, required: true })}
                />
                {
                    errors.duration &&
                    <p className='error'>Duration can't be zero</p>
                }
                <br />
                <label htmlFor="comment">Comment</label><br />
                <textarea
                    placeholder='Comment'
                    {...register("comment")}
                ></textarea>
                <br />
                <button>Add Activity</button>
            </form>
        </div>
    )
}
export default ActivityForm