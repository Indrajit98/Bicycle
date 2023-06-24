import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const SellProducts = () => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user)

    const { data: seller = [], refetch } = useQuery({
        queryKey: ["user", user?.email],
        queryFn: () =>
            fetch(`https://bicyle-server-side-indrajit98.vercel.app/seller/${user?.email}`).then((res) =>
                res.json()
            ),
    });
    console.log(seller);

    const handleDeletePost = (user_id) => {
        // console.log(user_id);
        fetch(`https://bicyle-server-side-indrajit98.vercel.app/products/${user_id}`, {
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
    };
    if (loading) {
        return <progress className="progress w-full"></progress>;
    }

    return (
        <div>
            <h2 className="text-2xl mt-4">Your sell post list {seller?.length}</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                {seller?.map((product, i) => (
                    <div key={i}>
                        <div className="card  shadow-xl p-4">
                            <figure>
                                <img
                                    src={product.picture}
                                    alt="Shoes"
                                    className="w-full h-80 object-contain justify-center items-center"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-semibold text-slate-700 ">
                                    {product.Company_name}
                                </h2>
                                <p>Model {product.model}</p>
                                <p>Post Date {product?.date?.slice(0, 9)}</p>
                                <p className="text-xl font-semibold text-slate-700 ">
                                    Price: {product.sell_price}
                                </p>
                                <p>Condition:{product.condition}</p>
                                <p>Use Time: {product.use_time}</p>
                                <div className="flex items-center">
                                    <h4>Seller Name: {product.seller_name}</h4>
                                </div>
                                <p>
                                    <span>Number:{product.mobile_number}</span>
                                </p>
                                <p>
                                    {product?.description?.length > 100 ? (
                                        <>{product?.description?.slice(0, 100) + "...."}</>
                                    ) : (
                                        <>{product.description}</>
                                    )}
                                </p>
                                <div className="card-actions justify-end">
                                    <button
                                        onClick={() => handleDeletePost(product._id)}
                                        className="btn btn-outline"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SellProducts;
