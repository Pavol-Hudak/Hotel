import React, { useState } from 'react';
import '../CSS/search.css'

const Search: React.FC = () => {
    return(
        <div className='searchContainer'>
            <form>
                <input className='date-input' type='date'></input>
                <input className='date-input' type='date'></input>
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