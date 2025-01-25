import React, { useState, useEffect } from "react";
import { FaBook, FaClock, FaEye } from "react-icons/fa";

const Articles = () => {
  const [visibleArticles, setVisibleArticles] = useState(new Set());

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleArticles((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".article-card")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="articles"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Featured Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              id={`article-${article.id}`}
              className={`article-card bg-white rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                visibleArticles.has(`article-${article.id}`)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2 text-indigo-500" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaEye className="mr-2 text-indigo-500" />
                  <span>{article.views} views</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                <FaBook className="mr-2" />
                Read on Medium
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
