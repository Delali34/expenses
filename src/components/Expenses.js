import React from 'react';
import { Button, Card,Col,Modal } from "react-bootstrap";
import { useState } from 'react';
import { connect,useDispatch } from 'react-redux';
import { deleteUser } from '../action/ActionExpenses';
import EditExpenses from './EditExpenses';

const Expenses = (props) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
       
        dispatch(deleteUser(props.data.id))
        console.log(props.data.id)
    }

    
    return (
        <div>
          
            <Modal show={show} onHide={handleClose} animation={false} className='editnow'>
        <Modal.Header closeButton>
          <Modal.Title>EditExpenses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditExpenses prefill={props.data} closeModal={handleClose} className='form'/>
        </Modal.Body>
      </Modal>


<Col className='output-container'>        
<Card className='output'>
      <Card.Body className='cardAdd'>
      <Card.Text className="mb-2 text-muted"> Date <br/> {props.data.date}</Card.Text>
        <Card.Text>Item / Services <br/> {props.data.title}</Card.Text>       
        <Card.Text> Amount <br/> GHC {props.data.text} </Card.Text>
        <Card.Text> Category <br/>  {props.data.select} </Card.Text>
      <div className="button-div">
          <button href="#" onClick={handleShow}><i class="fa-regular fa-pen-to-square icon"></i></button>
        {/* <Button onClick={(e)=>{dispatch(deleteUser(props.data.id))}}>delete</Button> */}
        <button  onClick={handleDelete}><i class="fa-solid fa-trash icons"></i></button>
        {/* <button>View</button> */}
      </div>
      </Card.Body>
    </Card>
</Col>
        </div>
    );
}

const mapDispatch ={
    deleteUser,
}




export default connect(null,mapDispatch) (Expenses);