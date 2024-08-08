import React from 'react';

const Resume = (props) => {
  return (
    <>
      <div className='col-md-6'>
        <label htmlFor='Resume' className='form-label'>
          Resume
        </label>
        <input
          className='form-control'
          type='file'
          id='Resume'
          name='Resume'
          value={props?.emp?.Resume || ''}
          onChange={props?.handleChange}
        />
      </div>
      <div className='col-md-6'>
        <label htmlFor='Skills' className='form-label'>
          Skills
        </label>
        <input
          className='form-control'
          type='file'
          id='Skills'
          name='Skills'
          value={props?.emp?.Skills || ''}
          onChange={props?.handleChange}
        />
      </div>
    </>
  );
};

export default Resume;
