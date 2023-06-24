import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch(`https://bicyle-server-side-indrajit98.vercel.app/users`).then(
        (res) => res.json()
      ),
  });

  // console.log(users);
  const handleDeleteUser = (user_id, uid) => {
    console.log(user_id);
    console.log(uid);
    fetch(`https://bicyle-server-side-indrajit98.vercel.app/users/${user_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User Account is delete successfully.");
        refetch();
      });
  };

  const handleVerify = (user_id) => {
    // console.log('inkdra')
    fetch(
      `https://bicyle-server-side-indrajit98.vercel.app/users/verify/${user_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("User Account is Verify.");
        refetch();
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold py-4 text-slate-700 ">
        Total User {users.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Account Category</th>
              <th>Email</th>
              <th>User Id</th>
              <th>User ROLE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.account_category}</td>
                <td>{user.email}</td>
                <td>{user._id}</td>
                {user?.role === "admin" ? (
                  <div className="justify-center ml-6 mt-5">admin</div>
                ) : (
                  <th>
                    <button
                      onClick={() => handleVerify(user._id)}
                      className="btn btn-outline btn-xs"
                    >
                      {" "}
                      {user?.role !== "verify" ? "unverified" : "verify"}{" "}
                    </button>
                  </th>
                )}
                {
                  user.role === 'admin' ? '' :
                  <th>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-outline btn-xs"
                  >
                    Delete
                  </button>
                </th>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
