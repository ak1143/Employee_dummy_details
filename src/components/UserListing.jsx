import React, { useEffect, useState } from 'react';
import getUserDetails from '../api/userDetails';
import Employees from './Employees';
import logo from "../../assets/logo.jpeg";
import filterIcon from "../../assets/filterIcon.png";
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

function UserListing() {
  const [users, setUsers] = useState([]);
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  
  const countries = [
    "United States",
    "India"
  ];
  
  const genders = [
    "female", "male"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserDetails();
        setUsers(data.users);
        setCountry('');
        setGender('');
      } catch (error) {
        console.log("Error in fetchdata");
      }
    }
    fetchData();
  }, []);

  const handleCountryChange = (e) => { setCountry(e.target.value); }
  const handleGenderChange = (e) => { setGender(e.target.value); }

  // Filter employees based on selected country and gender
  const filteredUserDetails = users.filter((user) => {
    return (
      (country === '' || user.address.country.toLowerCase() === country.toLowerCase()) &&
      (gender === '' || user.gender.toLowerCase() === gender.toLowerCase())
    );
  });

  return (
    <>
      <div className='w-full p-5'>
        <div className='flex justify-start items-center mb-5'>
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-full max-w-screen-lg gap-10'>
            <div className='flex justify-between items-center mb-5'>
              <h1 className='text-5xl'>Employees</h1>
              <div className='flex items-center ml-4 gap-2'>
                <img src={filterIcon} alt="Filter Icon" className='h-5 mr-2'/>
                <FormControl className='mr-4'>
                  <Select
                    value={country}
                    onChange={handleCountryChange}
                    className='h-7 text-xs'
                    displayEmpty
                  >
                    <MenuItem value="">Country</MenuItem>
                    {countries.map((country) => (
                      <MenuItem key={country} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <Select
                    value={gender}
                    onChange={handleGenderChange}
                    className='h-7 text-xs'
                    displayEmpty
                  >
                    <MenuItem value="">Gender</MenuItem>
                    {genders.map((gender) => (
                      <MenuItem key={gender} value={gender}>
                        {gender}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <Employees data={filteredUserDetails} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserListing;