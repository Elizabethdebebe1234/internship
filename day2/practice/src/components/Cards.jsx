
function Cards ({equipment}) {

    return(
        <div className="equipment-card">
            <div className= "card-content">
            <h2> {equipment.name}</h2>
            <h3>${equipment.price}</h3>
            
        </div>
        </div>
    )
}

export default Cards;