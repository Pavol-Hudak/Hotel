import React, { useState } from 'react';
import '../CSS/navbar.css'
interface DropdownProps {
  options: string[]; // Array of options
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
    const [currentOption, setCurrentOption] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () =>{
        setIsOpen(!isOpen);
        console.log("open");
    };
    const handleOptionSelect = (option: string) => {
        setCurrentOption(option);
        setIsOpen(false)
    };
    return(
        <div className='dropdown'>
            <button className='dropdown-button' onClick={toggleDropdown}>{currentOption || 'English'}</button>
        {isOpen && (
            <ul className='dropdown-options'>{
                options.map((option) => (
                    <li className='dropdown-choice' key={option} onClick={() => handleOptionSelect(option)}>{option}</li>
                ))
            }
            </ul>
        )}
        </div>
    )
}
export default Dropdown;