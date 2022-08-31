import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { appendErrors, useForm } from 'react-hook-form';
import api from '../../../configs/api';

const picture = 'https://www.figma.com/file/czpxRx46XfXd4IFIKll6kx/Untitled?node-id=68%3A2007'


const SettingForm = ({ user }) => {
  const navigate = useNavigate();


  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const updateUserInfo = (data) => {
    console.log('test', data)
    api.patch(`user/me`, data)
      .then(response => {
        console.log(response.data)
        navigate('/user/dashboard');
      }).catch(error => { console.log(error) });
  }


  return (
    <div className="setting-form">
      <form onSubmit={handleSubmit(updateUserInfo)}>
        <div className="setting-form-container">
          <div class='form-group'>
            <h2>Personal Information</h2>
            <label htmlFor="name">Name</label>
            <input
              type='text'
              defaultValue={user.name}
              placeholder='name'
              {...register('name')}
            />
            <br />

            <label htmlFor="username">Username</label>
            <input
              type='text'
              defaultValue={user.username}
              placeholder='username'
              {...register('username')}
            />
            <br />

            <label htmlFor="email">Email</label>
            <input
              type='email'
              defaultValue={user.email}
              placeholder='name'
              {...register('email')}
            />
            <br />

            <label htmlFor="password">Password</label>
            <input
              type='password'
              placeholder='***********'
              {...register('password',
                // { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ }
              )}
            />
            <br />

            <label htmlFor="height">Height</label>
            <input
              type='number'
              placeholder='height'
              defaultValue={user.height}
              {...register('height')}
            />
            <br />

            <label htmlFor="weight">Weight</label>
            <input
              type='number'
              placeholder='weight'
              defaultValue={user.weight}
              {...register('weight')}
            />
          </div>
          <div className='line'></div>
          <div className='form-group'>
            <h2>Set Goal</h2>

            <label htmlFor='weekly_goal' >Weekly Goal (days/week)</label>
            <input
              type="range"
              step='1'
              min='1'
              max='7'
              className='scale'
              defaultValue={user.weekly_goal}
              {...register('weekly_goal')}
            />
            <div className='scale-num'>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
            </div>
            {
              errors.weekly_goal &&
              <p className="error">Weekly Goal is required</p>
            }
            <br />

            <label htmlFor="goal_weight">Goal Weight</label>
            <input
              type="number"
              step="0.01"
              defaultValue={user.goal_weight}
              placeholder="weight (kg)"
              {...register("goal_weight", { min: 0.5, max: 200 })}
            />
            {
              errors.goal_weight &&
              <p className="error">Goal Weight must between 0.5 kg. and 200 kg</p>
            }
            <br />

            <label htmlFor="inspiration">inspiration</label>
            <textarea
              placeholder="inspiration"
              defaultValue={user.inspiration}
              {...register("inspiration")} />
            {/* >{user.inspiration}</textarea> */}
            {
              errors.inspiration &&
              <p className="error">Inspirations is required</p>
            }
          </div>
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>)
}


export default SettingForm