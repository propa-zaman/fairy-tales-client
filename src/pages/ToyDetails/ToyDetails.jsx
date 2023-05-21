import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    useTitle('Toy Details');
    const { id } = useParams();
    const [toy, setToy] = useState(null);

    useEffect(() => {
        fetch(`https://fairy-tales-server.vercel.app/allToys/${id}`)
            .then((res) => res.json())
            .then((data) => setToy(data));
    }, [id]);

    if (!toy) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <div className="avatar flex items-center justify-center mb-4">
                <div className="w-64 rounded border-8 border-primary">
                    <img src={toy.Picture} alt={toy.ToyName} />
                </div>
            </div>
            <div className='text-start'>
            <h2 className="text-2xl font-bold text-info mb-2">{toy.ToyName}</h2>
            <p className="text-gray-600 mb-2 font-semibold">Seller: {toy.Seller}</p>
            <p className="text-gray-600 mb-2 font-semibold">Seller Email: {toy.SellerEmail}</p>
            <p className="text-gray-600 mb-2 font-semibold">Price: {toy.Price}</p>
            <p className="text-gray-600 mb-2 font-semibold">Rating: {toy.Rating}</p>
            <p className="text-gray-600 mb-2 font-semibold">Available Quantity: {toy.AvailableQuantity}</p>
            <p className="text-gray-600 mb-2 font-semibold">Description: {toy.Description}</p>
            </div>
        </div>
    );
};

export default ToyDetails;
