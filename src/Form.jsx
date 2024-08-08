import React, { useState, useEffect } from 'react';

const FormDesign = () => {
  const [tab1, tab2] = useState();
  return (
    <main>
      <form class='row g-3'>
        <div class='col-12'>
          <h1>Employee Name</h1>
          <h5>Job position</h5>
        </div>
        <h6>Tags</h6>
        <div class='col-md-6'>
          <label for='inputEmail4' class='form-label'>
            Work Mobile
          </label>
          <input type='email' class='form-control' id='inputEmail4' />
        </div>
        <div class='col-md-6'>
          <label for='inputPassword4' class='form-label'>
            Department
          </label>
          <input type='password' class='form-control' id='inputPassword4' />
        </div>
        <div class='col-md-6'>
          <label for='inputEmail4' class='form-label'>
            Work Phone
          </label>
          <input type='email' class='form-control' id='inputEmail4' />
        </div>
        <div class='col-md-6'>
          <label for='inputPassword4' class='form-label'>
            Job Position
          </label>
          <input type='password' class='form-control' id='inputPassword4' />
        </div>
        <div class='col-md-6'>
          <label for='inputEmail4' class='form-label'>
            Work Email
          </label>
          <input type='email' class='form-control' id='inputEmail4' />
        </div>
        <div class='col-md-6'>
          <label for='inputPassword4' class='form-label'>
            Manager
          </label>
          <input type='password' class='form-control' id='inputPassword4' />
        </div>
        <div class='col-md-6'>
          <label for='inputEmail4' class='form-label'></label>
          <input type='email' class='form-control' id='inputEmail4' />
        </div>
        <div class='col-md-6'>
          <label for='inputPassword4' class='form-label'>
            Coach
          </label>
          <input type='password' class='form-control' id='inputPassword4' />
        </div>
        <ul class='nav justify-content-center'>
          <li class='nav-item'>
            <a class='nav-link active' aria-current='page' href='#'>
              Reesume
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Work Information
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Private Information
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' aria-disabled='true'>
              HR Settings
            </a>
          </li>
        </ul>
        {/* <div class='col-12'>
          <label for='inputAddress' class='form-label'>
            Address
          </label>
          <input
            type='text'
            class='form-control'
            id='inputAddress'
            placeholder='1234 Main St'
          />
        </div>
        <div class='col-12'>
          <label for='inputAddress2' class='form-label'>
            Address 2
          </label>
          <input
            type='text'
            class='form-control'
            id='inputAddress2'
            placeholder='Apartment, studio, or floor'
          />
        </div>
        <div class='col-md-6'>
          <label for='inputCity' class='form-label'>
            City
          </label>
          <input type='text' class='form-control' id='inputCity' />
        </div>
        <div class='col-md-4'>
          <label for='inputState' class='form-label'>
            State
          </label>
          <select id='inputState' class='form-select'>
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class='col-md-2'>
          <label for='inputZip' class='form-label'>
            Zip
          </label>
          <input type='text' class='form-control' id='inputZip' />
        </div>
        <div class='col-12'>
          <div class='form-check'>
            <input class='form-check-input' type='checkbox' id='gridCheck' />
            <label class='form-check-label' for='gridCheck'>
              Check me out
            </label>
          </div>
        </div>
        <div class='col-12'>
          <button type='submit' class='btn btn-primary'>
            Sign in
          </button>
        </div> */}
      </form>
    </main>
  );
};

export default FormDesign;
