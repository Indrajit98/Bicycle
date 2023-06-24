import { useQuery } from '@tanstack/react-query';

const AllSeller = () => {
    const { data: seller = [] } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetch(`https://bicyle-server-side-indrajit98.vercel.app/allseller/Seller`)
            .then(res => res.json())
    });
    // console.log(seller); 
    return (
        <div>
        <h2 className='text-2xl font-semibold py-4 text-slate-700 '>Total User {seller.length}</h2>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Account Category</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        seller?.map((user, i) => <tr key={i}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">{user.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                               {user.account_category}
                            </td>
                            <td>{user.email}</td>
                            
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllSeller;