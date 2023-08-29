import React, { useState, ChangeEvent } from 'react';
import '../CSS/search.css'

const Search: React.FC = () => {
    const [rawCheckInDate, setRawCheckInDate] = useState<string>('');
    const [rawCheckOutDate, setRawCheckOutDate] = useState<string>('');
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

    let CheckInDate = new Date();

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
        setRawCheckInDate(`${day}${month}${year}`)
        if(numericInput.length >= 8){
            CheckInDate = new Date(parseInt(year),parseInt(month)-1,parseInt(day))
            console.log(CheckInDate)
        }
    }
    else if(name === 'checkOut-input'){
        setFormattedCheckOutDate(formatted)
        setRawCheckOutDate(`${day}${month}${year}`) 
        if(numericInput.length >= 8){
            const CheckOutDate = new Date(parseInt(year),parseInt(month)-1,parseInt(day))
            console.log(CheckOutDate)
        }   
        };
    }

    return(
        <div className='searchContainer'>
            <form id='search-room'>
                    <input name='checkIn-input' className='date-input' type='text' placeholder="Check-in" value={formattedCheckInDate} onChange={handleChange}></input>
                    <input name='checkOut-input' className='date-input' type='text' placeholder="Check-out" value={formattedCheckOutDate} onChange={handleChange}></input>
                    <div className='select-persons'>
                        <div className='row'>
                            <div className='column'>
                                <h3>Adult</h3>
                                <h3>Children</h3>
                                <h3>Senior</h3>                         
                            </div>
                            <div className='column'>
                                <input className="minus-button" type='button' value={"-"}></input>                       
                                <input className="minus-button" type='button' value={"-"}></input>                       
                                <input className="minus-button" type='button' value={"-"}></input>                       
                            </div>
                            <div className='column'>
                                <h3>1</h3>
                                <h3>1</h3>
                                <h3>1</h3>                 
                            </div>
                            <div className='column'>
                                <input className="plus-button" type='button' value={"+"}></input>
                                <input className="plus-button" type='button' value={"+"}></input>
                                <input className="plus-button" type='button' value={"+"}></input>             
                            </div>
                            <div className='column'>
                                <input type='submit' className='find-button' value={"Find a room"}/>                
                            </div>
                        </div>
                    </div>
                
            </form>
        </div>
    )
}
export default Search;