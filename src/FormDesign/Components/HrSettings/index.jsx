import React from 'react';

const HrSettings = (props) => {
  return (
    <>
      <div className='col-md-6'>
        <h3>Status</h3>
        <label htmlFor='EmployeeType' className='form-label'>
          Employee Type
        </label>
        <input
          type='text'
          className='form-control'
          id='EmployeeType'
          name='EmployeeType'
          value={props?.emp?.EmployeeType || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='RelatedUser' className='form-label'>
          Related User
        </label>
        <input
          type='text'
          className='form-control'
          id='RelatedUser'
          name='RelatedUser'
          value={props?.emp?.RelatedUser || ''}
          onChange={props?.handleChange}
        />
      </div>
      <div className='col-md-6'>
        <h3>Attendance/Point Of Sale</h3>
        <label htmlFor='PinCode' className='form-label'>
          PIN Code
        </label>
        <input
          type='text'
          className='form-control'
          id='PinCode'
          name='PinCode'
          value={props?.emp?.PinCode || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='BadgeId' className='form-label'>
          Badge ID
        </label>
        <input
          type='text'
          className='form-control'
          id='BadgeId'
          name='BadgeId'
          value={props?.emp?.BadgeId || ''}
          onChange={props?.handleChange}
        />
      </div>
      <div className='col-md-6'>
        <h3>Payroll</h3>
        <label htmlFor='RegistrationNumberOfTheEmployee' className='form-label'>
          Registration Number Of The Employee
        </label>
        <input
          type='text'
          className='form-control'
          id='RegistrationNumberOfTheEmployee'
          name='RegistrationNumberOfTheEmployee'
          value={props?.emp?.RegistrationNumberOfTheEmployee || ''}
          onChange={props?.handleChange}
        />
      </div>
      <div className='col-md-6'>
        <h3>Payroll</h3>
        <label htmlFor='JobPosition' className='form-label'>
          Job Position
        </label>
        <input
          type='text'
          className='form-control'
          id='JobPosition'
          name='JobPosition'
          value={props?.emp?.JobPosition || ''}
          onChange={props?.handleChange}
        />
      </div>
      <div className='col-md-6'>
        <h3>Application Settings</h3>
        <label htmlFor='HourlyCost' className='form-label'>
          Hourly Cost
        </label>
        <input
          type='text'
          className='form-control'
          id='HourlyCost'
          name='HourlyCost'
          value={props?.emp?.HourlyCost || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='FleetMobilityCard' className='form-label'>
          Fleet Mobility Card
        </label>
        <input
          type='text'
          className='form-control'
          id='FleetMobilityCard'
          name='FleetMobilityCard'
          value={props?.emp?.FleetMobilityCard || ''}
          onChange={props?.handleChange}
        />
      </div>
    </>
  );
};

export default HrSettings;
