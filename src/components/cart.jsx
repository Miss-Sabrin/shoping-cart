import './cart.css';
import { useCart } from 'react-use-cart';
const Cart=() =>{
   const{
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
   }= useCart();

   if(isEmpty) return <h3 className='text-center py-5'>my Cart is Empty</h3>


    
  return (
    <div className='container-fluid py-5'>
        <div className="row justify-content-center">
            <h3 className=' fw-bolder
            text-center py-3 text-decoration-underline'>My Cart</h3>
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4 ">
               <div className="d-flex justify-content-center   py-3">
               <p className='position-relative fw-bolder text-title '>Cart   <span className=' translate-middle rounded-pill badge bg-danger mx-1  '> {totalUniqueItems}</span> </p>
               <p className=' text-title fw-bolder'> Total Items
               <span className='position-absolute  translate-middle rounded-pill badge bg-success mx-1  '>
               ({totalItems}) 
                </span> 
                {/* ({totalItems}) */}
               </p> 
               </div> 

               <div>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                        {items.map((item, index)=>{
                            return(
                                <tr key={index} className='align-middle'>
                                    <td> <img src={item.img}  className="img-cart"  alt={item.title} /></td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td>Quantity: {item.quantity}</td>
                                    <td>
                                        <button 
                                        onClick={()=>updateItemQuantity(item.id,item.quantity -1)}
                                         className='btn btn-outline-dark ms-1'>-</button>

                                        <button 
                                        onClick={()=>updateItemQuantity(item.id,item.
                                            quantity +1)}
                                        
                                        className='btn btn-outline-dark ms-1'>+</button>

                                        <button 
                                        onClick={()=> removeItem(item.id)}
                                        
                                        className='btn btn-outline-danger ms-5'>remove item</button>


                                    </td>


                                </tr>
                            )
                        })}

                    </tbody>

                </table>

               </div>
               
            <div className="d-flex justify-content-between py-5">
                <button onClick={()=>emptyCart()} className='btn btn-danger'>Clear All</button>
                <h3>totla price: ${cartTotal}</h3>

            </div>


            </div>




        </div>

        
    </div>
  )
}

export default Cart