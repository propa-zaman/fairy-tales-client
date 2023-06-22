import React from 'react';

const MyToysRow = ({ addedToy, handleDelete, handleAddToyConfirm }) => {

    const { _id, Picture, ToyName, Subcategory, Price, Rating } = addedToy;
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {Picture && <img src={Picture} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {ToyName}
            </td>
            <td>{Subcategory}</td>
            <td>${Price}</td>
            <td>{Rating}</td>
            <th>

                <button onClick={() => handleAddToyConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
            </th>
        </tr>
    );
};

export default MyToysRow;