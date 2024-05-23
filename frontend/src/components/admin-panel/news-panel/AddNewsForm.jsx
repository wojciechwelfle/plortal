import { Button, Form } from "react-bootstrap";

import "./AddNewsForm.css";
import { addNews } from "../../../services/newsService";

const AddNewsForm = ({ getNews }) => {
    const postNews = (news) => {
        addNews(news)
            .then((response) => {
                console.log(response);
                getNews();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const news = {
            title: event.target.title.value,
            description: event.target.description.value,
            photoUrl: event.target.photoUrl.value,
        };
        console.log(news);

        postNews(news);
    };

    return (
        <>
            <div className="panel">
                <h2>Panel dodawania</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group
                        className="title"
                        controlId="username"
                        size="lg"
                    >
                        <Form.Label> Tytuł </Form.Label>
                        <Form.Control autoFocus name="title" />
                    </Form.Group>
                    <Form.Group
                        className="group"
                        controlId="description"
                        size="lg"
                    >
                        <Form.Label> Opis </Form.Label>
                        <Form.Control name="description" />
                    </Form.Group>
                    <Form.Group
                        className="group"
                        controlId="photoUrl"
                        size="lg"
                    >
                        <Form.Label> PhotoUrl </Form.Label>
                        <Form.Control name="photoUrl" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button
                            variant="dark"
                            className="btn"
                            type="submit"
                            style={{ backgroundColor: "var(--main-color)" }}
                        >
                            Dodaj Newsa
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default AddNewsForm;
