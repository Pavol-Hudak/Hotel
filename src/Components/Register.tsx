import React, { ChangeEvent, FormEvent, useState } from 'react';
import '../CSS/signin.css'

function Register() {
    const [guestData, setGuestData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        date_of_birth: '',
        email: '',
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setGuestData({ ...guestData, [name]: value });
    };
    
    const submitChange =async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await fetch('api/register-guest',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(guestData)
            });
            if(response.ok){
                console.log(response)
                window.location.reload();
            }
            else console.log("Doesnt work")
        }
        catch(error){
            console.log("error")
        }
        
    }     


    return (
        <div className='register-container'>
            <form id='register-form' onSubmit={submitChange} className='register-form'>
                <label>First name</label>
                <input
                    type="text"
                    name="first_name"
                    value={guestData.first_name}
                    onChange={handleChange}
                />
                <label>Middle name</label>
                <input
                    type="text"
                    name="middle_name"
                    value={guestData.middle_name}
                    onChange={handleChange}
                />
                <label>Last name</label>
                <input
                    type="text"
                    name="last_name"
                    value={guestData.last_name}
                    onChange={handleChange}
                />
                <label>Date of birth</label>
                <input
                    type="date"
                    name="date_of_birth"
                    value={guestData.date_of_birth}
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={guestData.email}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );


  }
  
  export default Register;
  