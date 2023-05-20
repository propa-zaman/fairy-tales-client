import React from 'react';
import { Link } from 'react-router-dom';


const Gallery = () => {
    const galleryData = [
        {
            id: 1,
            title: 'Merida',
            imageUrl: 'https://i.ibb.co/v4DQcqC/merida.jpg',
            linkUrl: '/gallery/1',
        },
        {
            id: 2,
            title: 'Snow White',
            imageUrl: 'https://i.ibb.co/6Hpy4TS/snow-white.jpg',
            linkUrl: '/gallery/1',
        },
        {
            id: 3,
            title: 'Frozen',
            imageUrl: 'https://i.ibb.co/1Kh0xQ1/frozen.jpg',
            linkUrl: '/gallery/1',
        },
        {
            id: 4,
            title: 'Rapunzel',
            imageUrl: 'https://i.ibb.co/Yh2pGPM/rapunzel.jpg',
            linkUrl: '/gallery/1',
        },
        {
            id: 5,
            title: 'Mermaid',
            imageUrl: 'https://i.ibb.co/MNCRNvr/mermaid.jpg',
            linkUrl: '/gallery/1',
        },
        {
            id: 6,
            title: 'Moana',
            imageUrl: 'https://i.ibb.co/SQmMmmc/moana.jpg',
            linkUrl: '/gallery/1',
        },
        {
            id: 8,
            title: 'Jesmin',
            imageUrl: 'https://i.ibb.co/pPzgVnr/jesmin.jpg',
            linkUrl: '/gallery/1',
        },
        {
            id: 9,
            title: 'Belle',
            imageUrl: 'https://i.ibb.co/L1YWRWq/belle.jpg',
            linkUrl: '/gallery/1',
        },
        {
            id: 10,
            title: 'Aurora',
            imageUrl: 'https://i.ibb.co/khLYJQN/aurora.jpg',
            linkUrl: '/gallery/1',
        },
        {
            id: 11,
            title: 'Arieal',
            imageUrl: 'https://i.ibb.co/48dK574/arieal.jpg',
            linkUrl: '/gallery/1',
        },
        {
            id: 12,
            title: 'Cindrella',
            imageUrl: 'https://i.ibb.co/7Wsk6YY/cindrella.jpg',
            linkUrl: '/gallery/1',
        },
        {
            id: 13,
            title: 'Vannesa',
            imageUrl: 'https://i.ibb.co/w4csQDz/vannesa.jpg',
            linkUrl: '/gallery/1',
        }
    ];

    return (
        <div>
            <div className='mt-24 mb-9'>
                <h2 className='text-center text-info font-bold text-5xl'>Disney Dolls Gallery</h2>
            </div>
            <div className="flex flex-wrap justify-center">
                {galleryData.map((item) => (
                    <div
                        key={item.id}
                        className="w-64 mx-4 my-4 rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-110"
                    >
                        <div className="h-64">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 bg-success">
                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Gallery;