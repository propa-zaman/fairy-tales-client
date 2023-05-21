import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../Shop by Category/ShopByCategory';
import OutNow from '../OutNow/OutNow';
import Discount from '../Discount/Discount';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Discount></Discount>
            <OutNow></OutNow>
            

        </div>
    );
};

export default Home;