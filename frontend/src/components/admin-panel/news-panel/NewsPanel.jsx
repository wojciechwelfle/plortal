import { useEffect, useState } from "react";
import AdminNav from "../AdminNav";
import PanelHeader from "../PanelHeader";
import AddNewsForm from "./AddNewsForm";
import ModificationNewsPanel from "./ModificationNewsPanel";
import { logoutUser } from "../../../routes/userAuthorization";
import { getAllNews } from "../../../services/newsService";

const NewsPanel = () => {
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

    useEffect(() => {
        getNews();
    }, []);

    const navItems = [
        {
            eventKey: "first",
            text: "Dodaj Newsa",
            component: <AddNewsForm getNews={getNews}/>,
        },
        {
            eventKey: "second",
            text: "Usuń Newsa",
            component: <ModificationNewsPanel news={news} setNews={setNews} getNews={getNews}/>,
        },
    ];

    return (
        <>
            <PanelHeader>Panel zarządzania aktualnościami</PanelHeader>
            <div style={{padding: "20px"}}>
                <AdminNav navItems={navItems} />
            </div>
        </>
    );
};

export default NewsPanel;
