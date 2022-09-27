import React from 'react';
import Expenses from "./Expenses";
import { connect } from "react-redux"

const AllExpenses = (props) => {
    return (
        <div className='containerExpenses'>
            
                       
                {props.data.map((data,index) => {
                        return (
                            <Expenses data={data}
                                  key={data.id}/>
                        )
                    })}
            
    
        </div>
        )
    }

const mapState =(state)=>({
    data:state.datas
})

export default connect(mapState)(AllExpenses);