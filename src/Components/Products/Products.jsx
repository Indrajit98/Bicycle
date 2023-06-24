import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegCheckCircle } from "react-icons/fa";
import ProductBook from '../Home/ProductBook';
import { AuthContext } from '../../Contexts/AuthProvider';
import Swal from 'sweetalert2'



const Products = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState(null)
  const { user } = useContext(AuthContext)
  // console.log(user)

  const loginAlert = () => {
    console.log('indkau');
    Swal.fire({
      title: 'Please Login',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }


  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
      {
        products?.map((product, i) => <div key={i}>
          <div className="card  shadow-xl p-4">
            <figure><img src={product.picture} alt="Shoes" className="mt-4 h-80 object-contain justify-center items-center" /></figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold text-slate-700 ">
                {product.Company_name}
              </h2>
              <p >Model {product.model}</p>
              <p>Post Date {product.date.slice(0, 9)}</p>
              <p className="text-xl font-semibold text-slate-700 ">Price: {product.sell_price}</p>
              <p>Condition:{product.condition}</p>
              <p>Use Time: {product.use_time}</p>
              <div className='flex items-center'>
                <h4>Seller Name: {product.seller_name}</h4>
                <div className=" text-success w-4 pl-1">
                  <FaRegCheckCircle></FaRegCheckCircle>
                </div>
              </div>
              <p><span>Number:{product.mobile_number}</span></p>
              <p>
                {
                  product.description.length > 100 ? <>{product.description.slice(0, 100) + '....'}</> :
                    <>{product.description}</>
                }
              </p>
              <div className="card-actions justify-end">
                {
                  user ? <label onClick={() => setProduct(product)} htmlFor="booking-modal" className="btn btn-outline">Buy Now</label> :
                    <><button onClick={loginAlert} className="btn btn-outline">Buy Now</button></>
                }
              </div>
            </div>
          </div>

        </div>)
      }
      <div>
        {
          product && <ProductBook product={product} setProduct={setProduct}></ProductBook>
        }
      </div>
    </div>
  );
};

export default Products;