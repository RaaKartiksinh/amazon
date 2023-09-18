// import React from 'react'

// import './Cart.css'

// import { Link } from 'react-router-dom'

// export default function Cart({ product }) {
//   return (
//     <div className='col'>
//       <Link to={`/product/${product._id}`} >
//         <div className="product-card " >

//           {/* <div className="badge">Hot</div> */}
//           <div className="product-tumb">
//             <img src={product.image} alt="" />
//           </div>
//           <div className="product-details">
//             <span className="product-catagory">{product.category}</span>
//             <h4>
//               <Link to="##">{product.title}</Link>
//             </h4>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus
//               nostrum!
//             </p>
//             <div className="product-bottom-details">
//               <div className="product-price">
//                 <small>$96.00</small>
//                 {product.price}
//               </div>
//               <div className="product-links">
//                 <Link to={'#'}>
//                   <i className="bi bi-cart-check-fill"></i>
//                 </Link>
//                 <Link to={'#'}>
//                   <i className="bi bi-heart"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   )
// }

import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

export default function Cart({ product }) {
  return (
    <div className="col">
      <Link to={`/product/${product._id}`}>
        <div className="product-card">
          <div className="product-tumb">
            <img src={product.image} alt="" />
          </div>
          <div className="product-details">
            <span className="product-catagory">{product.category}</span>
            <h4>{product.title}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              possimus nostrum!
            </p>
            <div className="product-bottom-details">
              <div className="product-price">
                <small>$96.00</small>
                {product.price}
              </div>

              <div className="product-links">
                <Link to={"#"}>
                  <i className="bi bi-cart-check-fill"></i>
                </Link>
                <Link to={"#"}>
                  <i className="bi bi-heart"></i>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
