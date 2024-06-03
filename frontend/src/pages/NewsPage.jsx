import React, { useState, useEffect } from "react";
import News from "../components/news/News";

import "../components/news/News.css";
import { getAllNews } from "../services/newsService";
import NavigationBar from "../components/navbar/Navbar";
import { ThemeProvider } from '../components/facility/ThemeContext';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    getAllNews()
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        window.location.href = "/login";
      });
  }, []);

  return (
    <>
        <ThemeProvider>
            <div>
      <NavigationBar />
      <News newsData={newsData} />
            </div>
        </ThemeProvider>
    </>
  );
};

export default NewsPage;
