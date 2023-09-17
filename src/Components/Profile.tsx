import Navbar from "./Navbar";
import SidebarMenu from "./SidebarMenu";
import '../CSS/profile.css'
import { useRef, useEffect, useState, ChangeEvent } from "react";


interface Guest {
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    password: string;
}


const Profile: React.FC = () => {
    let [testState, setTestState] = useState<Guest | null>(null)
    
    let personalInfo = [{
        label: 'First name',
        type: 'text',
        name: 'first_name', 
        placeholder: testState?.first_name
    },
    {
        label: 'Middle name',
        type: 'text',
        name: 'middle_name', 
        placeholder: testState?.middle_name
    },{
        label: 'Last name',
        type: 'text',
        name: 'last_name', 
        placeholder: testState?.last_name
    },{
        label: 'Email',
        type: 'text',
        name: 'email',
        placeholder: testState?.email
    }]
        

    useEffect(() => {
        fetch('api/get-userdata')
        .then(response => response.json())
        .then(data => setTestState(data))  
    },[]);
    
    useEffect(() => {
        console.log(testState)
    }, [testState]);
    
    const formRef = useRef<HTMLFormElement | null>(null);

    const enableEditing = () => {
        formRef.current = document.getElementById('edit-personal-info-form') as HTMLFormElement;
        if (formRef.current) {
            const inputs = formRef.current.querySelectorAll('input');
            const hiddenElements =  formRef.current.querySelector(".hidden-label") as HTMLLabelElement;
            hiddenElements.style.display = hiddenElements.style.display === "none" ? "flex" : "none";
            inputs.forEach((input) => {
                input.disabled = !input.disabled;
            });
        }
    }

    let [temp,setTemp] = useState<string>("")

    const handleChange = (e:ChangeEvent<HTMLInputElement>, input:string) => {
        /*console.log(e.target.value);
        console.log(input)*/
        for(const infoItem of personalInfo){
            if(infoItem.name === input){
                infoItem.placeholder = e.target.value
                setTemp(infoItem.placeholder)
                console.log(temp)
            }
        }
        /*console.log("finito")
        console.log(personalInfo)*/
    }
    
    return(
        <>
            <Navbar/>
            <div className="profile-content">
                    <SidebarMenu/>          
                <div className="profile-info">
                    <section id='personal-information' className="info-section">
                        <form id='edit-personal-info-form'>
                            <h1>Personal information</h1>
                            {personalInfo.map((info) => {
                                return (
                                <label key={info.label}>                               
                                    {info.label}
                                    <input disabled={true} onChange={(e) => handleChange(e, info.name)}
                                     type={info.type} name={info.name} placeholder={info.placeholder}/>
                                </label>
                                )
                            })}
                            <label className="hidden-label" style={{display: 'none'}}>Confirm email
                                    <input disabled={true} type='text' name='confirmEmail' placeholder="Confirm email" />
                                </label>
                            <button className="edit-info-button" type="button" onClick={enableEditing}>Edit</button>
                        </form>
                    </section>
                </div>
            </div>          
        </>
    )
}
export default Profile;