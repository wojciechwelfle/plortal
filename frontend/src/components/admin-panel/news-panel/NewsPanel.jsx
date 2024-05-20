import { useEffect, useState } from "react";
import PanelHeader from "../PanelHeader";
import { getLoginRequest, logoutUser } from "../../../routes/userAuthorization";
import { Button, Table } from "react-bootstrap";
import { getAllNews, deleteNews } from "../../../services/newsService";

const NewsPanel = () => {
    const fields = ["NewsId", "Date", "Title", "Actions"];

    const [news, setNews] = useState([]);

    const getNews = () => {
        getAllNews()
            .then((response) => {
                setNews(response.data);
            })
            .catch((error) => {
                console.log(error);
                logoutUser();
            });
    };

    const deleteNewsById = (id) => {
        const loginRequest = getLoginRequest();
        console.log(loginRequest);

        deleteNews(id, loginRequest)
            .then((res) => {
                console.log(res);
                setNews(news.filter((newsItem) => newsItem.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getNews();
    }, []);

    const tableContainerStyle = {
        overflowX: "auto",
        whiteSpace: "nowrap",
    };

    return (
        <>
            <PanelHeader>Panel zarządzania aktualnościami</PanelHeader>
            <div style={tableContainerStyle}>
                <Table striped responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            {fields.map((field, index) => (
                                <th key={index}>{field}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {news.map((newsItem, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{newsItem.id}</td>
                                <td>{newsItem.modificationDate}</td>
                                <td>{newsItem.title}</td>
                                <td>
                                    <Button
                                        onClick={() =>
                                            deleteNewsById(newsItem.id)
                                        }
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default NewsPanel;
