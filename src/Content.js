import { useState } from "react"

import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {

    const [items,setItems] = useState([
        {
            id:1,
            checked:false,
            item: "1L milk"
        },
        {
            id:2,
            checked:true,
            item: "1kg Sugar"
        },
        {
            id:3,
            checked:false,
            item: "250g Cottage Cheeze"
        },
    ])
   
    const handleCheck = (id)=>{
        const listItem = items.map((item)=> item.id ===id ? {...item,checked:!item.checked} : item);
        setItems(listItem)
        localStorage.setItem('shoppingList',JSON.stringify(listItem))
    }

    const handleDelete = (id) => {
        const listItem = items.filter((item)=> item.id !== id)
        setItems(listItem)
        localStorage.setItem('shoppingList',JSON.stringify(listItem))
    }
    

  return (
    <main>
        {items.length ? (

            <ul>
            {items.map((item) => (
                <li className="item" key={item.id}>
                    <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked}/>
                    <label 
                        style={(item.checked) ? {textDecoration:"line-through"} : null}
                        onDoubleClick={() => handleCheck(item.id)}
                        >{item.item}</label>
                    <FaTrashAlt 
                        onClick={()=>handleDelete(item.id)}
                        role="button" 
                        tabIndex='0' />
                </li>
            ))}
        </ul>
        
        ) : (<p style={{margin:'2rem'}}>Your List is empty</p>)}
        </main>
        )
    }
    
    export default Content