import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardFooter } from "react-bootstrap";
import "./News.css";

const News = ({ newsData }) => {
    const [visibleCards, setVisibleCards] = useState([]);
    const savedFontSize = parseInt(localStorage.getItem('fontSize'), 10) || 20;
    const savedTheme = localStorage.getItem('theme') || 'light';
    const [fontSize, setFontSize] = useState(savedFontSize);
    const [theme, setTheme] = useState(savedTheme);

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'purple-theme');
        document.documentElement.classList.add(`${theme}-theme`);
    }, [fontSize, theme]);

    useEffect(() => {
        const revealCards = () => {
            const delay = 200;
            newsData.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleCards((prevVisibleCards) => [
                        ...prevVisibleCards,
                        index,
                    ]);
                }, index * delay);
            });
        };
        revealCards();
        return () => setVisibleCards([]);
    }, [newsData]);

    return (
        <>
            <div className="news">
                <Row xs={1} md={2} className="g-4 news-row">
                    {newsData.map((news, idx) => (
                        <Col key={idx} md={6}>
                            <Card
                                className={`news-card ${
                                    visibleCards.includes(idx) ? "fade-in" : ""
                                }`}
                            >
                                <Card.Img
                                    className="news-img"
                                    variant="top"
                                    src={news.photoUrl}
                                />
                                <Card.Body>
                                    <Card.Title style ={{fontSize : `${fontSize+5}px` }}>{news.title}</Card.Title>
                                    <Card.Text>{news.description}</Card.Text>
                                </Card.Body>
                                <CardFooter>{news.modificationDate}</CardFooter>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default News;
