import React, { useState, ChangeEvent } from 'react';
import '../CSS/search.css'

const Search: React.FC = () => {
    const [rawDate, setRawDate] = useState<string>('');
  const [formattedCheckInDate, setFormattedCheckInDate] = useState<string>('');
  const [formattedCheckOutDate, setFormattedCheckOutDate] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const input = e.target.value;
    
    // Remove any non-numeric characters from the input
    const numericInput = input.replace(/\D/g, '');

    // Split the numeric input into day, month, and year
    const day = numericInput.slice(0, 2);
    const month = numericInput.slice(2, 4);
    const year = numericInput.slice(4, 8);

    // Format the date as "DD/MM/YYYY"
    let formatted = '';

  if (numericInput.length >= 1) {
    formatted += day;
  }

  if (numericInput.length >= 3) {
    formatted += `/${month}`;
  }

  if (numericInput.length >= 5) {
    formatted += `/${year}`;
  }
  if(name === 'checkIn-input'){
    setFormattedCheckInDate(formatted);
  }
  else if(name === 'checkOut-input'){
    setFormattedCheckOutDate(formatted)
  }

    
    // Set the raw date in state (numeric input)
    setRawDate(numericInput);
  };

    return(
        <div className='searchContainer'>
            <form>
                <input name='checkIn-input' className='date-input' type='text' placeholder="Check-in" value={formattedCheckInDate} onChange={handleChange}></input>
                <input name='checkOut-input' className='date-input' type='text' placeholder="Check-out" value={formattedCheckOutDate} onChange={handleChange}></input>
                <div className='search-persons'>
                    <input className='person-input' type='number'></input>
                    <input className='person-input' type='number'></input>
                    <input className='person-input' type='number'></input>
                </div>
            </form>
        </div>
    )
}
export default Search;