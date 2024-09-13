import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const NewsGrid = ({ setSelectedNews }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state
  const { category } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
     

      setLoading(true);
      setError(null); // Reset error state before fetching data
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${import.meta.env.VITE_GNEWS_API_KEY}&lang=en`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news. Please try again later."); // Set error message
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [category]);

  return (
    <div className="container z-40 mt-10 mx-auto p-4 flex flex-wrap justify-center bg-opacity-25">
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <ClipLoader color="#ffffff" loading={loading} size={50} />
        </div>
      ) : error ? (
        <div className="text-red-500">{error}</div> // Display error message
      ) : (
        news.map((article, index) => (
          <div
            key={index}
            className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 min-h-full hover:bg-gradient-to-r from-blue-200 to-pink-500 rounded-xl"
          >
            <div
              className="min-h-full min-w-full bg-gradient-to-r from-gray-950 to-blue-950 shadow-md rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedNews(article)}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover rounded-t-md text-orange-100 text-xl"
              />
              <div className="p-2">
                <h2 className="font-bold text-lg text-orange-200">{article.title}</h2>
                <p className="text-orange-100 mt-2">{article.description}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsGrid;
