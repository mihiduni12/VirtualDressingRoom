import React from 'react';
import Perahara from "../../images/Perahara.jpg"; // Correcting the image import

const articles = [
  {
    topic: "Esala Perahara",
    image: Perahara, // Using the imported image correctly
  },
  {
    topic: "Admas's Peak",
    image: "image3.jpg",
  },
  {
    topic: "Article 3",
    image: "image3.jpg",
  },
  {
    topic: "Article 4",
    image: "image4.jpg",
  },
  {
    topic: "Article 5",
    image: "image5.jpg",
  },
  {
    topic: "Article 6",
    image: "image6.jpg",
  },
  {
    topic: "Article 7",
    image: "image7.jpg",
  },
  // Add more articles as needed
];

function ArticleComponent() {
    return (
      <div className="flex flex-wrap justify-center">
        {articles.map((article, index) => (
          <div
            key={index}
            className="w-64 p-4 m-4 border border-gray-300 rounded-md"
          >
            <h2 className="text-lg font-bold mb-2">{article.topic}</h2>
            <img
              src={article.image}
              alt={article.topic}
              className="w-full h-40 object-cover mb-2"
            />
            <button className="bg-[#879d62] text-Black font-bold py-2 px-4 rounded">
              View Article
            </button>
          </div>
        ))}
      </div>
    );
  }


function CulExp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Cultural Expirence</h1>
    <ArticleComponent />
    </div>
  )
}

export default CulExp
