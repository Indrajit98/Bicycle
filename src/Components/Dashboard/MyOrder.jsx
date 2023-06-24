import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyOrder = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: booking = [],refetch} = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: () =>
      fetch(`https://bicyle-server-side-indrajit98.vercel.app/myOrders/${user?.email}`).then((res) =>
        res.json()
        
      ),
  });
  
  // console.log(booking);

  if (loading) {
    return <progress className="progress w-full"></progress>;
  }
  const handleDelete = (user_id) => {
      console.log(user_id);
      fetch(`https://bicyle-server-side-indrajit98.vercel.app/order/products/${user_id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        },
    })
        .then((res) => res.json())
        .then(() => {
            toast.success("User Account is delete successfully.");
            refetch();
        });
  }


  const handlePay = () => {
    console.log("indrjait");
  };

  refetch()
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold py-4 text-slate-700 ">
        Order {booking.length}
      </h2>
      <div>
        {booking?.map((product, id) => (
          <div key={id}>
            <div className="md:mt-8 shadow-md md:w-1/2 p-4 " data-aos="fade-right">
              <h4 className="md:text-xl font-semibold text-slate-800">Product Name: {product.productName}</h4>
              <p>product Id: {product.productId}</p>
              <p className="md:text-xl font-normal">price: {product.price}</p>
              <p>Location: {product.location}</p>
              <div className="flex justify-between mt-4">
                <button onClick={() => handleDelete(product._id)} className="btn btn-outline btn-sm mt-4">
                  delete Order
                </button>

                {product.price && !product.paid && (
                  <Link to={`/dashboard/payment/${product._id}`}>
                    <button
                      onClick={handlePay}
                      className="btn btn-outline btn-sm mt-4"
                    >
                      pay
                    </button>
                  </Link>
                )}
                {product.price && product.paid && (
                  <button className="text-xl text-green-600 mt-4">Paid</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
