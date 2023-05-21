import React, { useContext } from 'react';
import useTitle from '../../hook/useTitle';
import { AuthContext } from '../../Provider/AuthProvider';

const AddToy = () => {
    useTitle('Add Toy')

    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const Seller = user?.displayName;
        const SellerEmail= user?.email;
        const ToyName = form.toyName.value;
        const Subcategory = form.subcategory.value;
        const Price = form.price.value;
        const AvailableQuantity = form.availableQuantity.value;
        const Picture = form.picture.value;
        const Rating = form.rating.value;
        const Description = form.description.value;
      
        const addedToys = {
            Seller,
            SellerEmail,
            ToyName,
            Subcategory,
            Price,
            AvailableQuantity,
            Picture,
            Rating,
            Description
        }

        console.log(addedToys);

        fetch('https://fairy-tales-server.vercel.app/allToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Toy is added successfully')
                }
            })

    }
    return (
        <div className='max-w-lg mx-auto'>
            <h2 className='text-center text-5xl font-bold text-info mb-9'>Add Toy </h2>
            <form onSubmit={handleAddToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller</span>
                        </label>
                        <input type="text" name="seller" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="sellerEmail" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toyName" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory</span>
                        </label>
                        <input type="text" name="subcategory" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" name="availableQuantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" name="picture" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description"  className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-info btn-block" type="submit" value="Add Toy" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default AddToy;