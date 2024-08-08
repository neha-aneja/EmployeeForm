import React, { useState } from 'react';
import Axios from 'axios';
import HrSettings from './HrSettings';
import PrivateInformation from './PrivateInformation';
import Resume from './Resume';
import WorkInformtaion from './WorkInformation';

const InitialState = {
  EmployeeName: '',
  JobPosition: '',
  WorkMobile: '',
  WorkPhone: '',
  WorkEmail: '',
  Department: '',
  JobPosition: '',
  Manager: '',
  Coach: '',
  Resume: '',
  Skills: '',
  WorkAddress: '',
  WorkLocation: '',
  Expense: '',
  TimeOff: '',
  WorkingHours: '',
  Timezone: '',
  Roles: '',
  DefaultRole: '',
  Address: '',
  Email: '',
  Phone: '',
  Language: '',
  HomeWorkDistance: '',
  PrivateCarPlate: '',
  MaritalStatus: '',
  NumberOfDependentChildren: '',
  ContactName: '',
  ContactPhone: '',
  CertificateLevel: '',
  FieldOfStudy: '',
  School: '',
  Nationality: '',
  IdentificationNo: '',
  PassportNo: '',
  Gender: '',
  DateOfBirth: '',
  PlaceOfBirth: '',
  CountryOfBirth: '',
  NonResident: '',
  VisaNo: '',
  WorkPermitNo: '',
  VisaExpireDate: '',
  WorkPermitExpirationDate: '',
  WorkPermit: '',
  EmployeeType: '',
  RelatedUser: '',
  PinCode: '',
  BadgeId: '',
  RegistrationNumberOfTheEmployee: '',
  JobPosition: '',
  HourlyCost: '',
  FleetMobilityCard: '',
};

const FormBasic = () => {
  const axios = Axios.create();
  const [currentTab, setCurrentTab] = useState('Resume');
  const [emp, setEmp] = useState(InitialState);

  console.log(emp);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmp({ ...emp, [name]: value });
  };

  const switchTab = (tab) => {
    setCurrentTab(tab);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'Resume':
        return <Resume handleChange={handleChange} emp={emp} />;
      case 'Work Information':
        return <WorkInformtaion handleChange={handleChange} emp={emp} />;
      case 'Private Information':
        return <PrivateInformation handleChange={handleChange} emp={emp} />;
      case 'HR Settings':
        return <HrSettings handleChange={handleChange} emp={emp} />;
      default:
        return <Resume handleChange={handleChange} emp={emp} />;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/employees', emp);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <div className='row g-3'>
        <div className='col-12'>
          <h1>Employee Name</h1>
          <input
            type='text'
            className='form-control'
            id='EmployeeName'
            name='EmployeeName'
            value={emp?.EmployeeName || ''}
            onChange={handleChange}
          />
          <h5>Job position</h5>
          <input
            type='text'
            className='form-control'
            id='JobPosition'
            name='JobPosition'
            value={emp?.JobPosition || ''}
            onChange={handleChange}
          />
        </div>
        <h6>Tags</h6>
        <div className='col-md-6'>
          <label htmlFor='WorkMobile' className='form-label'>
            Work Mobile
          </label>
          <input
            type='text'
            className='form-control'
            id='WorkMobile'
            name='WorkMobile'
            value={emp?.WorkMobile || ''}
            onChange={handleChange}
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='Department' className='form-label'>
            Department
          </label>
          <input
            type='text'
            className='form-control'
            id='Department'
            name='Department'
            value={emp?.Department || ''}
            onChange={handleChange}
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='WorkPhone' className='form-label'>
            Work Phone
          </label>
          <input
            type='text'
            className='form-control'
            id='WorkPhone'
            name='WorkPhone'
            value={emp?.WorkPhone || ''}
            onChange={handleChange}
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='JobPosition' className='form-label'>
            Job Position
          </label>
          <input
            type='text'
            className='form-control'
            id='JobPosition'
            name='JobPosition'
            value={emp?.JobPosition || ''}
            onChange={handleChange}
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='WorkEmail' className='form-label'>
            Work Email
          </label>
          <input
            type='email'
            className='form-control'
            id='WorkEmail'
            name='WorkEmail'
            value={emp?.WorkEmail || ''}
            onChange={handleChange}
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='Manager' className='form-label'>
            Manager
          </label>
          <input
            type='text'
            className='form-control'
            id='Manager'
            name='Manager'
            value={emp?.Manager || ''}
            onChange={handleChange}
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='blank' className='form-label'></label>
          {/* <input type='text' className='form-control' id='blank' /> */}
        </div>
        <div className='col-md-6'>
          <label htmlFor='Coach' className='form-label'>
            Coach
          </label>
          <input
            type='text'
            className='form-control'
            id='Coach'
            name='Coach'
            value={emp?.Coach || ''}
            onChange={handleChange}
          />
        </div>
        <ul className='nav justify-content-center'>
          <li className='nav-item'>
            <button
              // className='nav-link'
              className={currentTab === 'Resume' ? 'active' : ''}
              aria-current='page'
              href='#'
              onClick={() => switchTab('Resume')}
            >
              Resume
            </button>
          </li>
          <li className='nav-item'>
            <button
              // className='nav-link'
              className={currentTab === 'Work Information' ? 'active' : ''}
              href='#'
              onClick={() => switchTab('Work Information')}
            >
              Work Information
            </button>
          </li>
          <li className='nav-item'>
            <button
              // className='nav-link'
              className={currentTab === 'Private Information' ? 'active' : ''}
              href='#'
              onClick={() => switchTab('Private Information')}
            >
              Private Information
            </button>
          </li>
          <li className='nav-item'>
            <button
              // className='nav-link'
              className={currentTab === 'HR Settings' ? 'active' : ''}
              aria-disabled='true'
              onClick={() => switchTab('HR Settings')}
            >
              HR Settings
            </button>
          </li>
        </ul>

        {renderContent()}
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </main>
  );
};

export default FormBasic;
