import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appendErrors, useForm } from 'react-hook-form';

import api from '/configs/api'

export const EditActivityForm = ({ activity_id, selectedActivity, setSelectedActivity }) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            ...selectedActivity,
            date: selectedActivity.date.split('T')[0]
        }
    });
    
    const updateActivity = async (data) => {
        const response = await api.patch(`user/activities/${activity_id}`, data)
        setSelectedActivity(data)
        reset()
        navigate('/user/activities');
    }

    return (
        <div className='activity-form'>
            <form onSubmit={handleSubmit(updateActivity)}>

                <label htmlFor='activity_type'>Activity Type</label><br />
                <select
                    ref={register}
                    {...register('activity_type', { required: true })}
                >
                    <option value=''>Select...</option>
                    <option value='cardio'>cardio</option>
                    <option value='weight training'>weight training</option>
                </select>
                {
                    errors.activity_type &&
                    <p className='error'>Please choose your activity type</p>
                }
                <br />

                <label htmlFor='activity_name'>Activity Name</label><br />
                <input
                    type='text'
                    ref={register}
                    placeholder='Type your activity'
                    list='activity_name'
                    {...register('activity_name', { required: true })}
                />
                <datalist id='activity_name'>
                    <option value='run'></option>
                    <option value='bicycle'></option>
                    <option value='ride'></option>
                    <option value='swim'></option>
                    <option value='walk'></option>
                    <option value='hike'></option>
                </datalist>
                {
                    errors.activity_name &&
                    <p className='error'>Please choose your activity</p>
                }
                <br />

                <label htmlFor='date'>Date</label><br />
                <input
                    type='date'
                    ref={register}
                    {...register('date', { required: true })}
                />
                {
                    errors.date &&
                    <p className='error'>Please enter the date</p>
                }
                <br />

                <label htmlFor='duration'>Duration</label><br />
                <input
                    type='number'
                    placeholder='duration(minutes)'
                    ref={register}
                    {...register('duration', { min: { value: 1 } })}
                />
                {
                    errors.duration &&
                    <p className='error'>Duration can't be zero</p>
                }
                <br />

                <label htmlFor='comment'>Comment</label><br />
                <textarea
                    placeholder='Comment'
                    ref={register}
                    {...register('comment')}
                ></textarea>
                <br />
                <button>Update Activity</button>
            </form>
        </div>
    )
}
export default EditActivityForm