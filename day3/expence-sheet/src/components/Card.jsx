import React from "react";
import expence from "../data/expence";

function Card ({expences}) {
    return(
        <div className = "Card">
            

            {expences.map((expence) =>{
                return(
                    <div key={expence.id}>
                        <h3>{expence.name}</h3>
                        <p>${expence.amount}</p>
                        
                        
                     </div>

                
                );

})}

                        
        </div>
        

    );
}

export default Card;