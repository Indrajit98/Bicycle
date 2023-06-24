import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const ProductBook = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext)
    const productBook = product;

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const buyerName = form.buyerName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const price = form.price.value;

        // console.log(productName, buyerName, email, phone ,location,price);

        const booking = {

            buyerName,
            productName,
            price,
            email,
            phone,
            location,
            productId: product._id,
        }
        // console.log(booking)

        fetch('https://bicyle-server-side-indrajit98.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Book successfully`)
                // console.log(data)
            })
        setProduct(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle w-full" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{user?.displayName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-10'>
                        <label className="label"><span className="label-text">Your name</span></label>
                        <input name='buyerName' type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" required />

                        <label className="label"><span className="label-text">Your Email</span></label>
                        <input name='email' type="text" defaultValue={user?.email} disabled className="input input-bordered w-full" required />

                        <label className="label"><span className="label-text">Bike Model</span></label>
                        <input name="productName" type="text" defaultValue={productBook.model} disabled className="input input-bordered w-full " />

                        <label className="label"><span className="label-text">Price</span></label>
                        <input name='price' type="text" defaultValue={productBook.sell_price} disabled className="input input-bordered w-full" required />

                        <label className="label"><span className="label-text">Your Location</span></label>
                        <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full" required />

                        <label className="label"><span className="label-text">Contact</span></label>
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" required />

                        <input className='btn btn-outline' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductBook;
