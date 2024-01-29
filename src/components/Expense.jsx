import { useState , useRef} from "react";
import { Button } from "@mui/material";
function Expense({totalExpense}){

    const [expense,setExpense]= useState([]);
    const [total,setTotal]= useState(0);
    const amountRef=useRef();
    const descRef=useRef();
    //const [remainingAmount, setRemainingAmount]= useState();

    const handleExpense = ()=>{
        setExpense((prevExpense)=>{
            setTotal((prev)=>{
                return prev + Number(amountRef.current.value)
            })
            return [...prevExpense, {description: descRef.current.value, amount: amountRef.current.value}]
        })

    }
    const condition= (totalExpense-total)
 console.log(expense)

    return(
        <>
            <div className="flex items-center justify-center">
                <div className="flex flex-row pt-10  ">
                    <h2 className="text-center font-mono md:font-bold text-xl text-sky-900">Enter Expense:</h2> &nbsp;  &nbsp;&nbsp;  &nbsp;
                    <input type="text" ref={descRef} class="placeholder-shown:border-gray-500 outline outline-offset-2 outline-1 rounded" placeholder="Eg. (Rent/Food)" />
                </div>
                &nbsp;  &nbsp;&nbsp;  &nbsp;
                <div className="flex flex-row pt-10">
                    <h2 className="text-center font-mono md:font-bold text-xl text-sky-900">Enter Amount:</h2> &nbsp;  &nbsp;&nbsp;  &nbsp;
                    <input type="number" ref={amountRef} class="placeholder-shown:border-gray-500 outline outline-offset-2 outline-1 rounded" placeholder="XXXXXX Rs"/>
                </div>

                <div className="pt-10">
                    &nbsp;  &nbsp;&nbsp;  &nbsp;
                    <Button variant="outlined" onClick={handleExpense}>Add </Button>
                </div>
                
            </div>
            <div className="flex flex-row pt-10 items-center justify-center px-96">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" class="px-6 py-3">Content</th>
                    <th scope="col" class="px-6 py-3">Description</th>
                    <th scope="col" class="px-6 py-3">Amount</th>
                    </tr>
                </thead>

                    <tbody>
                       {expense.map((e) => (
                        <tr key={e.description}>
                            <td  class="px-6 py-4">{expense.length-1}</td>
                            <td  class="px-6 py-4">{e.description}</td>
                            <td  class="px-6 py-4">{e.amount}</td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>

            <div className="flex flex-row pt-10 items-center justify-center">
                    <p className="text-center font-mono md:font-bold text-xl text-sky-900">Sum-Up: {total}</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {condition<0? <p className="text-center font-mono md:font-bold text-xl text-sky-900"> You are going BROKE! {totalExpense-total}</p> : <p className="text-center font-mono md:font-bold text-xl text-sky-900">Remaining Amount: {totalExpense-total}</p>}
                   
            </div>
            <br /><br /><br /><br /><br />
        </>
    )
}

export default Expense;

