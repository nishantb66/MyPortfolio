import React from "react";

const Articles = () => {
  return (
    <section
      id="articles"
      className="p-8 md:p-16 bg-gradient-to-r from-[#7e5a3c] to-[#5f3d2e] text-white min-h-screen"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 text-center text-[#f5c900]">
          My Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Article 1 */}
          <div className="bg-white bg-opacity-15 p-6 sm:p-8 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:bg-opacity-25">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#f5c900] mb-4">
              Creating an Interactive Dashboard in Google Colab (1.2k Views with
              702 reads)
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-4">
              A Comprehensive guide on how to create an interactive dashboard
              directly in Google Colab using Jupyter-Dash, Plotly Express,
              pandas, and SQLite.
            </p>
            <a
              href="https://medium.com/@baruahnishant2003/creating-an-interactive-dashboard-in-google-colab-with-jupyter-dash-plotly-and-sqlite-d5ce5bf26213"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-xl text-blue-400 hover:text-blue-600"
            >
              Read on Medium
            </a>
          </div>

          {/* Article 2 */}
          <div className="bg-white bg-opacity-15 p-6 sm:p-8 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:bg-opacity-25">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#f5c900] mb-4">
              Scala: A Powerful Tool for Data Analysis
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-4">
              Among the myriad of languages available, Scala has emerged as a
              potent contender, particularly for handling high-volume datasets.
            </p>
            <a
              href="https://medium.com/@baruahnishant2003/scala-a-powerful-tool-for-data-analysis-cbbeb7e66e71"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-xl text-blue-400 hover:text-blue-600"
            >
              Read on Medium
            </a>
          </div>

          {/* Article 3 */}
          <div className="bg-white bg-opacity-15 p-6 sm:p-8 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:bg-opacity-25">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#f5c900] mb-4">
              Anomalies in your data?
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-4">
              Techniques can you use to detect anomalies in your data
            </p>
            <a
              href="https://medium.com/@baruahnishant2003/what-techniques-can-you-use-to-detect-anomalies-in-your-data-4f2f675d4ae0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-xl text-blue-400 hover:text-blue-600"
            >
              Read on Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
