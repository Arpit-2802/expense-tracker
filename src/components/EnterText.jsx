import React from "react";
import { useState , useRef } from "react";
import { Button } from "@mui/material";

import Expense from "./Expense";
function EnterText() {

    const [totalExpense, setTotalExpense]= useState(0);
    const amntRef=useRef();
    const handleTotalExpense=()=>{

        setTotalExpense(amntRef.current.value)
    }
    
    return(
        <>
       
    
            <div className="flex flex-row space-x-4 justify-center pt-20">
                    <h1 className="text-center font-mono md:font-bold text-xl text-sky-900 px-1	">Start Monthly Expense: </h1>
                    
                    <input type="number" ref={amntRef} class="placeholder-shown:border-gray-500 outline outline-offset-2 outline-1 rounded" placeholder="XXXXXX Rs"/>

                    <Button variant="outlined" onClick={handleTotalExpense}>Total Amount:</Button>
                    
            </div>
            <div className=" flex items-center justify-center pt-10">
                {totalExpense===0 ? <></> : <p className=" font-mono md:font-bold text-xl text-sky-900  ">TOTAL AMOUNT: {totalExpense}</p>}
            </div>

            <Expense totalExpense={totalExpense}/>

        </>
    )


}
export default EnterText;