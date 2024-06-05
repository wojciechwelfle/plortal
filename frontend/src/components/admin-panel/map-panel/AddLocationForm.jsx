import { Button, Form } from "react-bootstrap";
import { addLocation } from "../../../services/locationService";

const AddLocationForm = ({getLocations}) => {
    const addNewLocation = (location) => {
        addLocation(location)
            .then((response) => {
                console.log(response);
                getLocations();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const location = {
            name: event.target.name.value,
            latitude: event.target.latitude.value,
            longitude: event.target.longitude.value,
            locationType: event.target.locationType.value,
        };
        console.log(location);
        addNewLocation(location);
    };

    return (
        <>
            <div className="panel">
                <h2>Panel dodawania</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="name" controlId="name" size="lg">
                        <Form.Label> Nazwa Budynku </Form.Label>
                        <Form.Control autoFocus name="name" />
                    </Form.Group>
                    <Form.Group
                        className="group"
                        controlId="latitude"
                        size="lg"
                    >
                        <Form.Label>
                            Szerokość Geograficzna (Latitude)
                        </Form.Label>
                        <Form.Control
                            name="latitude"
                            type="number"
                            step="0.000001"
                        />
                    </Form.Group>
                    <Form.Group
                        className="group"
                        controlId="longitude"
                        size="lg"
                    >
                        <Form.Label>
                            Długość Geograficzna (Longitude)
                        </Form.Label>
                        <Form.Control
                            name="longitude"
                            type="number"
                            step="0.000001"
                        />
                    </Form.Group>
                    <Form.Group
                        className="group"
                        controlId="locationType"
                        size="lg"
                    >
                        <Form.Label>Typ Budynku</Form.Label>
                        <Form.Select name="locationType">
                            <option>UNIVERSITY_BUILDING</option>
                            <option>PARK</option>
                            <option>RESTAURANT</option>
                        </Form.Select>
                    </Form.Group>
                    <br />
                    <div className="d-grid gap-2">
                        <Button
                            variant="dark"
                            className="btn"
                            type="submit"
                            style={{ backgroundColor: "var(--main-color)" }}
                        >
                            Dodaj Lokacje
                        </Button>
                    </div>
                    <br />
                </Form>
            </div>
        </>
    );
};

export default AddLocationForm;
