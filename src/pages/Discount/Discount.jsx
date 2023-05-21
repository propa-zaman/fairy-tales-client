import { Link } from 'react-router-dom';
import img1 from '../../assets/discount/discount_Mesa de trabajo 1 copy.png';
import img2 from '../../assets/discount/discount_Mesa de trabajo 1.png';

const Discount = () => {
  return (
    <div className="p-4 flex justify-center items-center">
      <div>
        <h2 className="text-5xl text-primary font-bold text-center mb-4">Discount</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-md">
            <img src={img2} alt="Discount 1" className="w-full h-128 object-cover" />
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2">Big Sale</h5>
              <Link to="/discount1" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-md">
            <img src={img1} alt="Discount 2" className="w-full h-128 object-cover" />
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2">Gift for You</h5>
              <Link to="/discount2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
