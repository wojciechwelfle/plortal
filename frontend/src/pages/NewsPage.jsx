import React, { useState, useEffect } from "react";
import News from "../components/news/News";


import "../components/news/News.css";
import NewsHeader from "../components/news/NewsHeader";
import { getAllNews } from "../services/newsService";
import NavigationBar from "../components/navbar/Navbar";

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
            <NavigationBar />

            <News newsData={newsData} />
        </>
    );
};

export default NewsPage;
