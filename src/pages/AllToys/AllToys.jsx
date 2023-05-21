import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hook/useTitle";

const AllToys = () => {
    useTitle('All Toys')
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  const [showLimit, setShowLimit] = useState(20);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fairy-tales-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data);
      });
  }, []);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    const filtered = toys.filter((toy) =>
      toy.ToyName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredToys(filtered);
    setShowLimit(20); 
  };

  const handleViewDetails = (toyId) => {
    if (isLoggedIn) {
      navigate(`/toys/${toyId}`);
    } else {
      navigate("/login", { state: { redirect: `/toys/${toyId}` } });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Toys</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by toy name"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <table className="w-full bg-white shadow rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Seller</th>
            <th className="py-2 px-4 border-b">Toy Name</th>
            <th className="py-2 px-4 border-b">Sub-category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Available Quantity</th>
            <th className="py-2 px-4 border-b">Picture</th>
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.slice(0, showLimit).map((toy) => (
            <tr key={toy._id}>
              <td className="py-2 px-4 border-b">{toy.Seller}</td>
              <td className="py-2 px-4 border-b">{toy.ToyName}</td>
              <td className="py-2 px-4 border-b">{toy.Subcategory}</td>
              <td className="py-2 px-4 border-b">{toy.Price}</td>
              <td className="py-2 px-4 border-b">{toy.AvailableQuantity}</td>
              <td className="py-2 px-4 border-b">
                <img src={toy.Picture} alt={toy.ToyName} className="w-20 h-20" />
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className=" btn btn-primary"
                  onClick={() => handleViewDetails(toy._id)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showLimit < filteredToys.length && (
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            onClick={() => setShowLimit((prevLimit) => prevLimit + 20)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllToys;
