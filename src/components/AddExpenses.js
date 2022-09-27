import React from 'react';
import { connect } from 'react-redux';
 import {addUser} from "../action/ActionExpenses";
import { useState } from 'react';
import {v4 as uuid } from "uuid"
import { Icon } from '@iconify/react';
// import { Form,Button } from "react-bootstrap"

const AddExpenses = (props) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [text, setText] = useState("");
    const [select, setCategory] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
     let newUser = {  title, select,  date,  text, id: uuid() };
     props.addUser(newUser);
    //  console.log(newUser);
    setTitle("");
    setDate("");
    setText("");
    setCategory("");
    
}

    return (
        <div className='hello insider'>
             <form action="form" className='form' autoComplete='off'>
                <div className='tracker'><h1>E-TRACKER</h1></div>
             
            

               <div className="input-group ">
                 
               <input className='input date' type="date" name="title" id="title" value={date} onChange={(e) =>{
                        setDate(e.target.value);
                    }}/>
                    {/* <label htmlFor="Notes title" className='placeholder'>Date Recorded</label> */}
               </div>
               <label htmlFor="Note" className='services' >Item / Services</label>
               <div className="input-group">
               
                <input className='input item' type="text" name="title" id="title" value={title} onChange={(e) =>{
                        setTitle(e.target.value);
                    }}/>
            
             </div>

             <label htmlFor="Note" className='services'  >Amount</label>
               <div className="input-group">
               <input className='input amount' type="number" name="title" id="title" placeholder=" GH₵" value={text} onChange={(e) =>{
                        setText(e.target.value);
                    }}></input>
                      {/* <label htmlFor="Notes title" className='placeholder'>Note Text</label> */}
               </div>
               <label htmlFor="Note" className='services' >Category</label>
               <div className="input-group">
               <select className='input category' name="title" id="title"  value={select} onChange={(e) =>{
                        setCategory(e.target.value);
                    }} 
                    >
                         <option value="Food">Food</option>
                        <option value="Drink">Drink</option>
                        <option value="Accommodation">Accommodation</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Housing">Housing</option>
                        <option value="Rent">Rent</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                      {/* <label htmlFor="Notes title" className='placeholder'>Note Text</label> */}
               </div>
               <div className="submit-btn save">
                 <button onClick={handleSubmit}>Save</button>
               </div>
               
             </form>
        </div>
        
    );
}

const mapDispatch ={
    addUser
}

export default connect(null, mapDispatch)(AddExpenses);