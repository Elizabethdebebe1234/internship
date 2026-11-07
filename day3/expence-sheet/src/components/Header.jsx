import { useState } from "react";


function Header ({onSubmitExpense}) {

    const [title,setTitle]= useState("");
    const [amount,setAmount]= useState("");
    const [date, setDate]= useState("");

    function handleSubmit(e){
        e.preventDefault();

        if (!title.trim() || !amount.trim() || !date.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        const newExpense = {
            id: Date.now(),
            name: title,
            amount: parseFloat(amount),
            date: new Date(date)
        };

        onSubmitExpense(newExpense);

        // Clear the form
        setTitle("");
        setAmount("");
        setDate("");
    }

    function handleCancel(){
        setTitle("");
        setAmount("");
        setDate("");
    }

    

    return(


        <div className = "header">
            <div className = "form">
            <div className= "title">
                <label> Title </label>
                <input
                    type="text"
                    value={title}
                    onChange = {(e) => setTitle (e.target.value)}
                />
                </div>

                <div className = "Amount">
                    <label >Amount </label>
                    <input
                    type="number"
                    value={amount}
                    onChange = {(e) => setAmount (e.target.value)}
                />
                </div>
                
               

                <div className = "Date">
                    <label >Date </label>
                    <input
                    type="date"
                    value={date}
                    onChange = {(e) => setDate (e.target.value)}
                />
                </div>

                 <div className = "submit-button">
                <div className = "Add-Expense">
                    <button onClick={handleSubmit}> Add Expense </button>
                </div>
                <div className = "Cancel">
                    <button type= "button" onClick={handleCancel}>
                     Cancel </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Header;