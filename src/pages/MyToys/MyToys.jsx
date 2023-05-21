import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [addedToys, setAddedToys] = useState([]);
    const navigate = useNavigate();

    const url = `https://fairy-tales-server.vercel.app/allToys?SellerEmail==${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET', 
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setAddedToys(data)
                }
                else{
                    // logout and then navigate
                    navigate('/');
                }
            })
    }, [url, navigate]);

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://fairy-tales-server.vercel.app/allToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = addedToys.filter(addedToy => addedToy._id !== id);
                        setAddedToys(remaining);
                    }
                })
        }
    }

    const handleAddToyConfirm = id => {
        fetch(`https://fairy-tales-server.vercel.app/allToys/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = addedToys.filter(addedToy => addedToy._id !== id);
                    const updated = addedToys.find(addedToy => addedToy._id === id);
                    updated.status = 'confirm'
                    const newAddedToys = [updated, ...remaining];
                    setAddedToys(ewAddedToys);
                }
            })
    }

    return (
        <div>
            <h2 className="text-5xl font-bold text-center text-info mb-9">My Toys: {setAddedToys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Subcategory</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedToys.map(addedToy => <MyToysRow
                                key={addedToy._id}
                                addedToy={addedToy}
                                handleDelete={handleDelete}
                                handleAddToyConfirm={handleAddToyConfirm}
                            ></MyToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;