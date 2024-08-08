import React from 'react';

const WorkInformtaion = (props) => {
  return (
    <>
      <div className='row mt-5 mb-3 '>
        <h3>Location</h3>
        <label htmlFor='WorkAddress' className='col-sm-2 col-form-label'>
          Work Address
        </label>
        <div className='col-sm-10'>
          <input
            type='text'
            className='form-control'
            id='WorkAddress'
            name='WorkAddress'
            value={props?.emp?.WorkAddress || ''}
            onChange={props?.handleChange}
          />
        </div>
        <label htmlFor='WorkLocation' className='col-sm-2 col-form-label mt-3'>
          Work Location
        </label>
        <div className='col-sm-10 mt-3'>
          <input
            type='text'
            className='form-control'
            id='WorkLocation'
            name='WorkLocation'
            value={props?.emp?.WorkLocation || ''}
            onChange={props?.handleChange}
          />
        </div>
      </div>
      <div className='row mt-5 mb-3 '>
        <h3>Approvers</h3>
        <label htmlFor='Expense' className='col-sm-2 col-form-label'>
          Expense
        </label>
        <div className='col-sm-10'>
          <input
            type='text'
            className='form-control'
            id='Expense'
            name='Expense'
            value={props?.emp?.Expense || ''}
            onChange={props?.handleChange}
          />
        </div>
        <label htmlFor='TimeOff' className='col-sm-2 col-form-label mt-3'>
          Time Off
        </label>
        <div className='col-sm-10 mt-3'>
          <input
            type='text'
            className='form-control'
            id='TimeOff'
            name='TimeOff'
            value={props?.emp?.TimeOff || ''}
            onChange={props?.handleChange}
          />
        </div>
      </div>
      <div className='row mt-5 mb-3 '>
        <h3>Schedule</h3>
        <label htmlFor='WorkingHours' className='col-sm-2 col-form-label'>
          Working Hours
        </label>
        <div className='col-sm-10'>
          <input
            type='text'
            className='form-control'
            id='WorkingHours'
            name='WorkingHours'
            value={props?.emp?.WorkingHours || ''}
            onChange={props?.handleChange}
          />
        </div>
        <label htmlFor='Timezone' className='col-sm-2 col-form-label mt-3'>
          Timezone
        </label>
        <div className='col-sm-10 mt-3'>
          <input
            type='text'
            className='form-control'
            id='Timezone'
            name='Timezone'
            value={props?.emp?.Timezone || ''}
            onChange={props?.handleChange}
          />
        </div>
      </div>
      <div className='row mt-5 mb-3 '>
        <h3>Planning</h3>
        <label htmlFor='Roles' className='col-sm-2 col-form-label'>
          Roles
        </label>
        <div className='col-sm-10'>
          <input
            type='text'
            className='form-control'
            id='Roles'
            name='Roles'
            value={props?.emp?.Roles || ''}
            onChange={props?.handleChange}
          />
        </div>
        <label htmlFor='DefaultRole' className='col-sm-2 col-form-label mt-3'>
          Default Role
        </label>
        <div className='col-sm-10 mt-3'>
          <input
            type='text'
            className='form-control'
            id='DefaultRole'
            name='DefaultRole'
            value={props?.emp?.DefaultRole || ''}
            onChange={props?.handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default WorkInformtaion;
