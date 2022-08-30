import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { appendErrors, useForm } from 'react-hook-form';
import api from '../../../configs/api';

const picture = 'https://www.figma.com/file/czpxRx46XfXd4IFIKll6kx/Untitled?node-id=68%3A2007'


const SettingForm = ({ user }) => {
  const navigate = useNavigate();


  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // const [picUpdate, setPicUpdate] = useState(false);

  // change profile picture, save change immediately without clicking save
  // const changeProfilePic = (newSrc) => {
  //   setUser((prev) => {
  //     const prevInfo = prev;
  //     prevInfo[0].profilePic = newSrc;
  //     return prevInfo
  //   })
  // }

  // const showPicUpdate = () => {
  //   setPicUpdate(true);
  // }

  // const hidePicUpdate = () => {
  //   setPicUpdate(false);
  // }

  const updateUserInfo = (data) => {
    console.log('test', data)
    api.patch(`user/me`, data)
    .then(response => {
      console.log(response.data)
      navigate('/user/dashboard');
    }).catch(error => { console.log(error) });
}


  return (
    <div className='setting-form'>
      <h2>Personal Information</h2>
      {/* <div className='picture-name'>
                  <div className='profile-pic' onMouseEnter={showPicUpdate} onMouseLeave={hidePicUpdate}>
                    <img src={picture} alt/>
                    <input id='update-profile' type='file' />
                    {picUpdate && <label htmlFor='update-profile'>Choose Photo</label>}
                  </div>
                  <div>
                    <h2 id='name-top'>{user[0].name}</h2>
                    <h3>{user[0].username}</h3>
                  </div>
                </div> */}
      <form onSubmit={handleSubmit(updateUserInfo)}>
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

        <button type='submit'>Save</button>
      </form>
    </div>)
}


export default SettingForm