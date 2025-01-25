import React from "react";
import { FaBook, FaClock, FaEye } from "react-icons/fa";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Creating an Interactive Dashboard in Google Colab",
      description:
        "A Comprehensive guide on how to create an interactive dashboard directly in Google Colab using Jupyter-Dash, Plotly Express, pandas, and SQLite.",
      link: "https://medium.com/@baruahnishant2003/creating-an-interactive-dashboard-in-google-colab-with-jupyter-dash-plotly-and-sqlite-d5ce5bf26213",
      image: "/dashboard.jpg",
      readTime: "8 min read",
      views: "1.2k",
      reads: "702",
      tags: ["Data Visualization", "Python", "Dashboard"],
    },
    {
      id: 2,
      title: "Scala: A Powerful Tool for Data Analysis",
      description:
        "Among the myriad of languages available, Scala has emerged as a potent contender, particularly for handling high-volume datasets.",
      link: "https://medium.com/@baruahnishant2003/scala-a-powerful-tool-for-data-analysis-cbbeb7e66e71",
      image: "/scala.jpg",
      readTime: "6 min read",
      views: "800",
      reads: "450",
      tags: ["Scala", "Data Analysis", "Big Data"],
    },
    {
      id: 3,
      title: "Anomalies in your data?",
      description: "Techniques can you use to detect anomalies in your data",
      link: "https://medium.com/@baruahnishant2003/what-techniques-can-you-use-to-detect-anomalies-in-your-data-4f2f675d4ae0",
      readTime: "5 min read",
      views: "950",
      reads: "520",
      tags: ["Machine Learning", "Data Science", "Analytics"],
    },
  ];

  return (
    <section
      id="articles"
      className="pt-20 sm:pt-24 md:pt-28 py-8 sm:py-12 md:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Featured <span className="text-green-600">Articles</span>
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md
                       border border-green-100"
            >
              {/* Article Metadata */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2 text-green-500" />
                  <span className="text-sm">{article.readTime}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaEye className="mr-2 text-green-500" />
                  <span className="text-sm">{article.views} views</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">
                {article.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-green-50 text-green-700 
                             rounded-md font-medium border border-green-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read Link */}
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 font-medium"
              >
                <FaBook className="mr-2" />
                <span>Read on Medium</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
