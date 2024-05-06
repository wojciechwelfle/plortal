import React, { useState, useEffect } from "react";
import News from "../components/news/News";
import { getAllNews } from "../components/news/getAllNews";

import "../components/news/News.css";

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
            <div>
                <h1 className="news" style={{padding:"10px", paddingLeft:"20px", color:"#8E0000"}}>Aktualności</h1>
                <News newsData={newsData} />
            </div>
        </>
    );
};

export default NewsPage;
