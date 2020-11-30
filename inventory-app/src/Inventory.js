import './Inventory.css'

function Inventory(props) {
    return (
    <div className= "inventoryContainer">
        <div>
         <h2>Item Name: {props.itemName}</h2>
        </div>

        <div>
            <h2>Stock Count: {props.count} lbs</h2>
        </div>

        <div>
            <h2>Item Price: ${props.price}/lb</h2>
        </div>

    </div>

)
}

export default Inventory;