import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../Shop by Category/ShopByCategory';
import OutNow from '../OutNow/OutNow';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <OutNow></OutNow>

        </div>
    );
};

export default Home;