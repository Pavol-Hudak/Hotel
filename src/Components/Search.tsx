import React, { useState, useEffect } from 'react';
import '../CSS/search.css'

const Search: React.FC = () => {
    function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const day = now.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    function getEndDate() {
        const now = new Date();
        now.setDate(now.getDate() + 7)
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const day = now.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const [startDate, setStartDate] = useState<string>(getCurrentDate());
    const [endDate, setEndDate] = useState<string>(getEndDate());
    useEffect(() => {
        setStartDate(getCurrentDate());
        setEndDate(getEndDate());
      }, []);

    return(
        <div className='searchContainer'>
            <form>
                <input className='date-input' type='text' placeholder="Check-in" value={startDate} onChange={(e) => setStartDate(e.target.value)}></input>
                <input className='date-input' type='text' placeholder="Check-out" value={endDate} onChange={(e) => setEndDate(e.target.value)}></input>
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