import React, { useState, ChangeEvent, useEffect} from 'react';
import '../CSS/search.css'

interface Counts {
    adult: number;
    child: number;
    senior: number;
}

const Search: React.FC = () => {
    const getSessionStorageCounts = () => {
        const storedCounts = sessionStorage.getItem('counts');
        if (storedCounts) {
            return JSON.parse(storedCounts) as Counts;
        }
        return {
            adult: 0,
            child: 0,
            senior: 0,
        };
    };

    const [counts, setCounts] = useState<Counts>(getSessionStorageCounts());

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

    const changeNumber = (e: React.MouseEvent<HTMLInputElement, MouseEvent>, key: keyof typeof counts, change: number) => {
        setCounts((prevState) => ({
            ...prevState,
            [key]: Math.max(prevState[key] + change, 0),
        }));
    }

    useEffect(() => {
        sessionStorage.setItem('counts', JSON.stringify(counts));
    }, [counts]);

    return(
        <div className='searchContainer' style={{zIndex:1}}>
            <form id='search-room'>
                    <input name='checkIn-input' className='date-input' type='text' placeholder="Check-in" value={formattedCheckInDate} onChange={handleChange}></input>
                    <input name='checkOut-input' className='date-input' type='text' placeholder="Check-out" value={formattedCheckOutDate} onChange={handleChange}></input>
                    <div className='select-persons'>
                        <div className='row'>                           
                            <h3>Adult</h3>
                            <input className="minus-button" type='button' value={"-"} onClick={e => changeNumber(e,'adult',-1)}></input>  
                            <span>{counts.adult}</span>
                            <input className="plus-button" type='button' value={"+"} onClick={e => changeNumber(e,'adult',1)}></input>

                            <h3>Children</h3>
                            <input className="minus-button" type='button' value={"-"} onClick={e => changeNumber(e,'child',-1)}></input>    
                            <span>{counts.child}</span>   
                            <input className="plus-button" type='button' value={"+"} onClick={e => changeNumber(e,'child',1)}></input>
                            
                            <h3>Senior</h3>                                     
                            <input className="minus-button" type='button' value={"-"} onClick={e => changeNumber(e,'senior',-1)}></input>                       
                            <span>{counts.senior}</span>  
                            <input className="plus-button" type='button' value={"+"} onClick={e => changeNumber(e,'senior',1)}></input>                                    
                        </div>
                        <input type='submit' className='find-button' value={"Find a room"}/>
                    </div>
                
            </form>
        </div>
    )
}
export default Search;