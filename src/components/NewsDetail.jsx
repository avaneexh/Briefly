import React from 'react';

const NewsDetail = ({ news, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg overflow-auto max-h-full relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
          Close
        </button>
        <img src={news.image} alt={news.title} className="w-full h-60 object-cover rounded-md" />
        <h1 className="text-2xl font-bold mt-4">{news.title}</h1>
        <p className="text-gray-700 mt-4">{news.content}</p>
        <div className="mt-6 flex justify-end">
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
