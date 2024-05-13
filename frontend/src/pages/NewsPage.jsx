import React, { useState, useEffect } from "react";
import News from "../components/news/News";
import { getAllNews } from "../components/news/getAllNews";

import "../components/news/News.css";
import NewsHeader from "../components/news/NewsHeader";
import NavigationBar from "../components/navbar/Navbar";

const NewsPage = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        getAllNews()
            .then((data) => {
                setNewsData(data);
            })
            .catch((error) => {
                console.error("Error fetching news data:", error);
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
