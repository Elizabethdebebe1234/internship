import {useState} from "react";

function Header({onSubmitExpense}) {

   const[title, setTitle] = useState("");
   const[amount, setAmount] = useState("")
   const[date, setDate] = useState("")

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

    <div>
        <div className="input">
            <label>Title</label>
           <input type ="text"
                  value={title}
                  onChange={(e)=> setTitle (e.target.value)}

                  />

                  <label>Amount</label>
                  <input type ="number"
                  value={amount}
                  onChange={(e)=> setAmount (e.target.value)}

                  />
             
                  <label>Date</label>
                  <input type ="date"
                  value={date}
                  onChange={(e)=> setDate (e.target.value)}

                  />
                  </div>

                  
          <div className= "buttons">      
      <button type="button" onClick={handleSubmit}>Add Expense</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
      </div>
      
      </div>

    );   
}

export default Header;