import React, { useState } from "react";
import {
  categories,
  photos,
  sliderImages,
} from "../data/data.js";
import CustomSlider from "../components/Slider.jsx";

const HomePage = () => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (categoryItem) => {
    setCategory(categoryItem);
  };

  const filteredPhotos = photos.filter(
    (photo) =>
      category === "All" || category === "" || photo.category === category
  );

  const [zoomedImageId, setZoomedImageId] = useState(null);

  const handleImageZoom = (imageId) => {
    setZoomedImageId(imageId);
  };

  return (
    <div>
      <CustomSlider sliderImages={sliderImages} />
      <section className="container mx-auto mt-8">
        <div className="flex justify-center">
          {categories.map((categoryItem, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(categoryItem)}
              className={`${
                category === categoryItem
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700"
              } px-4 py-2 rounded-md mx-2`}
            >
              {categoryItem}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`relative ${
                zoomedImageId === photo.id ? "transform scale-105" : ""
              }`}
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
      </section>
    </div>
  );
};

export default HomePage;
