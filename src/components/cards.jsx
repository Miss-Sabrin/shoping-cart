import './cards.css';
import {useCart} from 'react-use-cart';

const Cards=(props)=> {

  const {addItem}= useCart();
    return (
        <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
        <div className="card  h-100 shadow rounded">
            <img src={props.img} alt=""  className="card-img-top img -fluid"/>
            <div className="card-body"> 
                <div className="d-flex justify-content-between ">
                <h4  className="card-title">{props.title}
                </h4>
                <span className="fw-bolder">{props.price}</span>
                </div>
                <div className="">
                <p className="card-text">{props.desc}</p>
                </div>

               <div className="d-grid justify-content-end  mt-4">
               <button className="btn btn-sm btn-outline-success" onClick={()=> addItem (props.item)}>Add to cars</button>
               </div>
            </div>

        </div>

      </div>
      </>
    )
  }
  
  export default Cards