import "./SideBarSearch.css";
import React from "react";

import useFormAndValidation from '../../hooks/useFormAndValidation';


const SideBarSearch = ({
  usersList,
  onChoice,
}) => {
    // eslint-disable-next-line
    const {values, errors, isValid, handleChange, setValues, setIsValid} = useFormAndValidation();
    
    function handleSearch(e){
        e.preventDefault();
        // console.log("Click SEARCH", values.phone)
        const chat_id = `${values.phone}@c.us`;
        const user = usersList.filter(user => user.id === chat_id)
        if(user.lenght !== 0) {
            // console.log(user[0], chat_id) // {id: '79030097538@c.us', name: 'Олег Ткач', type: 'user'}
            onChoice(user[0].id)
        }
        setValues('');
    }

  return (
    <div className="sideBar_search">
        <form className="searchBar_container" onSubmit={handleSearch}>
            <button type="submit">
                <div className="searchBar_icon"/>
            </button>
            <input 
                type="text" 
                name='phone'
                placeholder="Enter phone like: 79031234567"
                value={values?.phone || ''}
                minLength={11}
                maxLength={11}
                pattern='^\d+$'
                onChange={handleChange}
                required 
            />
        </form>
    </div>
  );
};

export default SideBarSearch;