import React from 'react';

const PrivateInformtaion = (props) => {
  return (
    <>
      <div className='col-md-6'>
        <h3>Private Contact</h3>
        <label htmlFor='Address' className='form-label'>
          Address
        </label>
        <input
          type='text'
          className='form-control'
          id='Address'
          name='Address'
          value={props?.emp?.Address || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='Email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          className='form-control'
          id='Email'
          name='Email'
          value={props?.emp?.Email || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='Phone' className='form-label'>
          Phone
        </label>
        <input
          type='text'
          className='form-control'
          id='Phone'
          name='Phone'
          value={props?.emp?.Phone || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='Language' className='form-label'>
          Language
        </label>
        <input
          type='text'
          className='form-control'
          id='Language'
          name='Language'
          value={props?.emp?.Language || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='HomeWorkDistance' className='form-label'>
          Home-Work Distance
        </label>
        <input
          type='text'
          className='form-control'
          id='HomeWorkDistance'
          name='HomeWorkDistance'
          value={props?.emp?.HomeWorkDistance || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='PrivateCarPlate' className='form-label'>
          Private Car Plate
        </label>
        <input
          type='text'
          className='form-control'
          id='PrivateCarPlate'
          name='PrivateCarPlate'
          value={props?.emp?.PrivateCarPlate || ''}
          onChange={props?.handleChange}
        />
      </div>
      <div className='col-md-6'>
        <h3>Family Status</h3>
        <label htmlFor='MaritalStatus' className='form-label'>
          Marital Status
        </label>
        <input
          type='text'
          className='form-control'
          id='MaritalStatus'
          name='MaritalStatus'
          value={props?.emp?.MaritalStatus || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='NumberOfDependentChildren' className='form-label'>
          Number of Dependent Children
        </label>
        <input
          type='text'
          className='form-control'
          id='NumberOfDependentChildren'
          name='NumberOfDependentChildren'
          value={props?.emp?.NumberOfDependentChildren || ''}
          onChange={props?.handleChange}
        />
        <div className='col-md-6 mt-4'>
          <h3>Emergency</h3>
          <label htmlFor='ContactName' className='form-label'>
            Contact Name
          </label>
          <input
            type='text'
            className='form-control'
            id='ContactName'
            name='ContactName'
            value={props?.emp?.ContactName || ''}
            onChange={props?.handleChange}
          />
          <label htmlFor='ContactPhone' className='form-label'>
            Contact Phone
          </label>
          <input
            type='text'
            className='form-control'
            id='ContactPhone'
            name='ContactPhone'
            value={props?.emp?.ContactPhone || ''}
            onChange={props?.handleChange}
          />
        </div>
      </div>
      <div className='col-md-6'>
        <h3>Education</h3>
        <label htmlFor='CertificateLevel' className='form-label'>
          Certificate Level
        </label>
        <input
          type='text'
          className='form-control'
          id='CertificateLevel'
          name='CertificateLevel'
          value={props?.emp?.CertificateLevel || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='FieldOfStudy' className='form-label'>
          Field Of Study
        </label>
        <input
          type='text'
          className='form-control'
          id='FieldOfStudy'
          name='FieldOfStudy'
          value={props?.emp?.FieldOfStudy || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='School' className='form-label'>
          School
        </label>
        <input
          type='text'
          className='form-control'
          id='School'
          name='School'
          value={props?.emp?.School || ''}
          onChange={props?.handleChange}
        />
        <div className='col-md-6 mt-4'>
          <h3>Work Permit</h3>
          <label htmlFor='VisaNo' className='form-label'>
            Visa No
          </label>
          <input
            type='text'
            className='form-control'
            id='VisaNo'
            name='VisaNo'
            value={props?.emp?.VisaNo || ''}
            onChange={props?.handleChange}
          />
          <label htmlFor='WorkPermitNo' className='form-label'>
            Work Permit No
          </label>
          <input
            type='text'
            className='form-control'
            id='WorkPermitNo'
            name='WorkPermitNo'
            value={props?.emp?.WorkPermitNo || ''}
            onChange={props?.handleChange}
          />
          <label htmlFor='VisaExpireDate' className='form-label'>
            Visa Expire Date
          </label>
          <input
            type='text'
            className='form-control'
            id='VisaExpireDate'
            name='VisaExpireDate'
            value={props?.emp?.VisaExpireDate || ''}
            onChange={props?.handleChange}
          />
          <label htmlFor='WorkPermitExpirationDate' className='form-label'>
            Work Permit Expiration Date
          </label>
          <input
            type='text'
            className='form-control'
            id='WorkPermitExpirationDate'
            name='WorkPermitExpirationDate'
            value={props?.emp?.WorkPermitExpirationDate || ''}
            onChange={props?.handleChange}
          />
          <label htmlFor='WorkPermit' className='form-label'>
            Work Permit
          </label>
          <input
            type='text'
            className='form-control'
            id='WorkPermit'
            name='WorkPermit'
            value={props?.emp?.WorkPermit || ''}
            onChange={props?.handleChange}
          />
        </div>
      </div>
      <div className='col-md-6'>
        <h3>Citizenship</h3>
        <label htmlFor='Nationality' className='form-label'>
          Nationality (Country)
        </label>
        <input
          type='text'
          className='form-control'
          id='Nationality'
          name='Nationality'
          value={props?.emp?.Nationality || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='IdentificationNo' className='form-label'>
          Identification No
        </label>
        <input
          type='text'
          className='form-control'
          id='IdentificationNo'
          name='IdentificationNo'
          value={props?.emp?.IdentificationNo || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='PassportNo' className='form-label'>
          Passport No
        </label>
        <input
          type='text'
          className='form-control'
          id='PassportNo'
          name='PassportNo'
          value={props?.emp?.PassportNo || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='Gender' className='form-label'>
          Gender
        </label>
        <input
          type='text'
          className='form-control'
          id='Gender'
          name='Gender'
          value={props?.emp?.Gender || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='DateOfBirth' className='form-label'>
          Date Of Birth
        </label>
        <input
          type='text'
          className='form-control'
          id='DateOfBirth'
          name='DateOfBirth'
          value={props?.emp?.DateOfBirth || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='PlaceOfBirth' className='form-label'>
          Place Of Birth
        </label>
        <input
          type='text'
          className='form-control'
          id='PlaceOfBirth'
          name='PlaceOfBirth'
          value={props?.emp?.PlaceOfBirth || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='CountryOfBirth' className='form-label'>
          Country Of Birth
        </label>
        <input
          type='text'
          className='form-control'
          id='CountryOfBirth'
          name='CountryOfBirth'
          value={props?.emp?.CountryOfBirth || ''}
          onChange={props?.handleChange}
        />
        <label htmlFor='NonResident' className='form-label'>
          Non-resident
        </label>
        <input
          type='text'
          className='form-control'
          id='NonResident'
          name='NonResident'
          value={props?.emp?.NonResident || ''}
          onChange={props?.handleChange}
        />
      </div>
    </>
  );
};

export default PrivateInformtaion;
