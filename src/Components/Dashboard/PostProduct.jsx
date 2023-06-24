
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PostProduct = () => {
    const{user} = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
console.log(user.email)
    const imageHostKey = process.env.REACT_APP_imageKey;

    const date = new Date()

    const handlePostProduct =(data) =>{
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image',image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url,{
            method: 'POST',
            body:formData
        })
        .then(res=> res.json())
        .then(imageData => {
            if(imageData.success){
                // console.log(imageData.data.url)

                const postData = {
                    Company_name: data.Company_name,
                    model: data.model,
                    seller_name: user.displayName,
                    sell_price: data.price,
                    picture: imageData.data.url,
                    location: data.location,
                    use_time: data.use_time,
                    mobile_number: data.contact,
                    description: data.description,
                    condition: data.condition,
                    email: user.email,
                    date: date,
                    // role:userRole,

                }
                console.log(postData);

                fetch(`https://bicyle-server-side-indrajit98.vercel.app/products`,{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                })
                .then(res => res.json())
                .then(() => {
                    toast.success('post successfully')
                    navigate('/')
                })
            }
        })
        
    }
    
    return (
        <div className='md:mb-20 mb-4'>
            <h1 className='text-2xl mx-4'>Add to product</h1>
            <form onSubmit={handleSubmit(handlePostProduct)} >
                <div className='mt-4 md:flex mx-4'>
                    <div className='mr-4'>
                        <label className="label md:w-80">  <span className="label-text">Company Name</span></label>
                        <select {...register("Company_name", { required: "Name is required *" })} className="select select-bordered w-full mr-4" required>
                            <option>Veloce</option>
                            <option>Phoenix</option>
                            <option>Duranta</option>
                        </select>
                    </div>
                    <div>
                        <label className="label md:w-80">  <span className="label-text">Location</span></label>
                        <select {...register("location")} className="select select-bordered w-full mr-4" required>
                            <option>Dhaka</option>
                            <option>Sylhet</option>
                            <option>Chattogram</option>
                            <option>Barishal</option>
                            <option>Khulna</option>
                            <option>Rajshahi</option>
                            <option>Rangpur</option>
                            <option>Mymensingh</option>
                        </select>

                    </div>
                </div>

                <div className='mt-4 mx-4 md:flex'>
                    <div className='mr-4'>
                        <label className="label md:w-80">  <span className="label-text">Your Name</span></label>
                        <input {...register("name")} type="text" defaultValue={user.displayName} readOnly  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label md:w-80">  <span className="label-text">Your email</span></label>
                        <input {...register("email")} type="email" defaultValue={user.email} readOnly className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='mt-4 mx-4 md:flex'>
                    <div className='mr-4'>
                        <label className="label md:w-80">  <span className="label-text">price</span></label>
                        <input name='price' {...register("price", { required: "Price is required *" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label md:w-80">  <span className="label-text">Product use time</span></label>
                        <input {...register("use_time", { required: "Use time is required *" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='mt-4 mx-4 md:flex'>
                    <div className='mr-4'>
                        <label className="label md:w-80">  <span className="label-text">Condition</span></label>
                        <select {...register("condition")} className="select select-bordered w-full mr-4" required>
                            <option>New</option>
                            <option>Used-like new</option>
                            <option>Used-good</option>
                            <option>Used-fair</option>

                        </select>
                    </div>
                    <div>
                        <label className="label md:w-80">  <span className="label-text">Model</span></label>
                        <input {...register("model", { required: "Model is required *" })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='mt-4 mx-4 md:flex'>
                    <div className='mr-4'>
                        <label className="label md:w-80">  <span className="label-text">Image Upload</span></label>
                        <input {...register("image", { required: "Image is required *" })} type="file" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div>
                        <label className="label md:w-80">  <span className="label-text">Contact</span></label>
                        <input {...register("contact", { required: "Contact is required *" })} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='mt-4 mx-4'>
                    <label className="label md:w-80">  <span className="label-text">Description</span></label>
                    <textarea {...register("description", { required: "description is required *" })} className="textarea textarea-bordered w-full md:w-3/5" placeholder="Bio"></textarea>
                </div>
                <input type="submit" value='Submit' className="btn btn-outline w-full max-w-xs mx-4 mt-8" />
            </form>
        </div>
    );
};

export default PostProduct;