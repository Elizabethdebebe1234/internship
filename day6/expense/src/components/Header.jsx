import {useState} from "react";

function Header({onSubmitExpense, onSearch}) {

   const[title, setTitle] = useState("");
   const[amount, setAmount] = useState("");
   const[date, setDate] = useState("");
   const[showForm, setShowForm] = useState(false);
   


   function handleSubmit (e){
    e.preventDefault();
        
     if (!title.trim() || !amount.trim() || !date.trim()){
        alert("please fill all spaces");
    return;    
   }
   const newExpense={
    id: Date.now(),
    name: title,
    amount:parseFloat(amount),
    date:new Date(date)
   }

   onSubmitExpense(newExpense);

   setTitle("");
   setAmount("");
   setDate("");
    
   
}

   function handleCancel (){
      setTitle("");
      setAmount("");
      setDate("");
   }

    return(

        <>
        {!showForm && (
            <div className="show-button-box">
            <button className="show-button" 
            onClick={()=> setShowForm(true)}>
            Add Expense</button>
            </div>

            
        )}
        {showForm && (

        

     <div className = "header">
            <div className = "form">

                <div className="search-input">
                    <input type="text"
                    placeholder="search expenses"
                        value ={onSearch.search}
                        onChange={(e)=> onSearch(e.target.value)}
                    />
                </div>
              
              <div className= "input-container">
                
               
                <div className="title-container">
                <label className="title-label"> Title </label>
                <input
                    className="title-input"
                    type="text"
                    value={title}
                    onChange = {(e) => setTitle (e.target.value)}
                />
                </div>

                    <div className="Amount-container">
                    <label className="Amount-label" >Amount </label>
                    <input className="Amount-input"
                    type="number"
                    value={amount}
                    onChange = {(e) => setAmount (e.target.value)}
                />

                    </div>
                </div>
                
               

                <div className = "date-container">
                    <label className="date-label" >Date </label>
                    <input className="date-input"
                    type="date"
                    value={date}
                    onChange = {(e) => setDate (e.target.value)}
                />
                </div>

                 <div className = "submit-button">
                <div className = "Add-Expense">
                    <button type="button" onClick={handleSubmit}> Add Expense </button>
                </div>
                <div className = "Cancel">
                    <button type= "button" onClick={handleCancel}>
                     Cancel </button>
                </div>
                </div>
            </div>
        </div>
        )}
        </>
    );
}

export default Header;