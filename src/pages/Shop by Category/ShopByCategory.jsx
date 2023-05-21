import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';

const ShopByCategory = () => {
    const [categories, setCategories] = useState([]);
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('categories.json')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    const handleViewDetails = () => {
        if (!isLoggedIn) {
            toast.error("You have to log in first to view details");
            navigate('/login');
        } else {
            navigate('/toydetails');
        }
    };

    return (
        <div>
            <div className='mt-24 mb-9'>
                <h2 className='text-center text-info font-bold text-5xl'>Shop By Category</h2>
            </div>

            <div className="flex justify-center items-center h-screen">
                <div className="w-full max-w-lg">
                    <Tabs className="w-full" selectedTabClassName="border-b-2 border-neutral">
                        <TabList className="flex">
                            {categories.map((category, index) => (
                                <Tab
                                    key={index}
                                    className={`text-gray-500 font-semibold py-2 px-4 transition-colors duration-200 focus:outline-none hover:text-neutral ${index === 0 ? 'text-primary' : ''
                                        }`}
                                >
                                    {category.categoryName}
                                </Tab>
                            ))}
                        </TabList>

                        {categories.map((category, index) => (
                            <TabPanel key={index} className="p-4 h-full w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                                    {category.dolls.map((doll) => (
                                        <div key={doll.id} className="bg-white rounded-lg shadow-md p-4 w-full">
                                            <div className="mb-4">
                                                <img
                                                    src={doll.picture}
                                                    alt={doll.name}
                                                    className="w-full h-64 object-cover rounded-lg"
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <h2 className="text-lg font-bold">{doll.name}</h2>
                                                <p>Price: {doll.price}</p>
                                                <p>Rating: {doll.rating}</p>
                                            </div>
                                            <button onClick={handleViewDetails} className="bg-primary hover:bg-neutral text-white font-bold py-2 px-4 rounded">
                                                View Details
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    )
};

export default ShopByCategory;
