import React, { useState } from 'react';
import { categories, photos } from '../data/data.js';

const GalleryPage = () => {
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (categoryItem) => {
    setCategory(categoryItem);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPhotos = photos.filter(
    (photo) =>
      (category === 'All' ||category === '' || photo.category === category) &&
      (searchTerm === '' ||
        photo.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );
    const [zoomedImageId, setZoomedImageId] = useState(null);
    const handleImageZoom = (imageId) => {
      setZoomedImageId(imageId);
    };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8">Spurs Gallery</h1>
      <section className="container mx-auto mt-8">
        <div className="flex justify-center mt-8">
        {categories.map((categoryItem, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(categoryItem)}
              className={`${
                category === categoryItem
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700'
              } px-4 py-2 rounded-md mx-2`}
            >
              {categoryItem}
            </button>
          ))}</div>
          <div className="flex justify-center mt-8">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="ml-4 p-2 rounded-md border border-gray-300 "
          /></div>
        
      </section>

      <section className="container mx-auto mt-8">
      {filteredPhotos.length === 0 ? (
          <p className="text-center">Tidak ada gambar yang ditemukan.</p>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {filteredPhotos.map(photo => (
            <div
              key={photo.id}
              className={`relative ${zoomedImageId === photo.id ? 'transform scale-105' : ''}`}
              onMouseEnter={() => handleImageZoom(photo.id)}
              onMouseLeave={() => setZoomedImageId(null)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover m-0"
              />
              {zoomedImageId === photo.id && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 flex justify-center items-center transition duration-300">
                  <span className="text-white text-xl font-bold">Zoom</span>
                </div>
              )}
            </div>
          ))}
        </div>
        )}
      </section>
    </div>
  );
};

export default GalleryPage;