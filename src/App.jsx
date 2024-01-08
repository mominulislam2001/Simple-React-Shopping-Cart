import { useState } from 'react'
import ProductCard from './ProductCard'
import TotalPrice from './TotalPrice'
import { useEffect } from 'react'





function App() {

     const [ products,setProducts ]= useState([])
    const [addedProductID,setAddedProductID]= useState([])
    

    useEffect(()=>{
        fetch('./productData.json')
        .then((res)=>res.json())
        .then((data)=>{
            setProducts(data);
        })
    },[])


    const addProductID = (id) =>{

        setAddedProductID((prevProductId=> {
            return [...prevProductId,id]
        }))

    }

    useEffect(()=>{
        console.log(addedProductID);
    },[addedProductID])
    

   
    const addTotal = addedProductID.reduce((total, id) => {
        for (let i = 0; i < products.length; i++) {
          if (products[i].id === id) {
            total += products[i].price;
          }
        }
        return total;
      }, 0);

  return (
    <div>

        <div style={{height:"150px"}}>

             <TotalPrice  addTotal = {addTotal}></TotalPrice>

        </div>
       
        <hr></hr>
        { products.map((product)=>{
          
          return (
                
                <div key = {product.id }style= {{display:"inline-block", margin:"30px", top:"50%",left:"50%"}} >
                    
                    <ProductCard  id={product.id} name={product.name}  price ={product.price} addProductID={addProductID}/>

                </div>  
                
            )

        })}
       


    </div>
  )
}

export default App