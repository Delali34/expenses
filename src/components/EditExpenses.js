import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../action/ActionExpenses';
import { v4 as uuid } from "uuid"
import { Icon } from '@iconify/react';

const EditExpenses = (props) => {

    const [title, setTitle] = useState( props.prefill.title);
    const [date, setDate] = useState( props.prefill.date);
    const [text, setText] = useState( props.prefill.text);
    const [select, setCategory] = useState( props.prefill.select);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        //  console.log(newUser);
        setTitle("");
        setDate("");
        setText("");
        dispatch(editUser({ id: props.prefill.id, title, date, text,select }));
        props.closeModal();
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

             <label htmlFor="Note" className='services' >Amount</label>
               <div className="input-group">
               <input className='input amount' type="number" name="title" id="title"  value={text} onChange={(e) =>{
                        setText(e.target.value);
                    }}></input>
                      {/* <label htmlFor="Notes title" className='placeholder'>Note Text</label> */}
               </div>
               <label htmlFor="Note" className='services' >Category</label>
               <div className="input-group">
               <select className='input category' name="title" id="title"  value={select} onChange={(e) =>{
                        setCategory(e.target.value);
                    }}>
                         <option value="" disabled selected>Select Category</option>
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



export default EditExpenses;