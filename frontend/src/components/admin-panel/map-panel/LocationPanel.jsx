import { Button, Table } from "react-bootstrap";
import { deleteLocation } from "../../../services/locationService";

const LocationPanel = ({locations, setLocations}) => {
    const fields = ["Id", "Nazwa Budynku", "Szerokość Geograficzna", "Długość geograficzna", "Typ Budynku", "Akcja"];

    const deleteLocationById = (id) => {
        deleteLocation(id)
            .then((res) => {
                console.log(res);
                setLocations(locations.filter((location) => location.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const tableContainerStyle = {
        overflowX: "auto",
        whiteSpace: "nowrap",
    };

    return (
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
                    {locations.map((location, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{location.id}</td>
                            <td>{location.name}</td>
                            <td>{location.latitude}</td>
                            <td>{location.longitude}</td>
                            <td>{location.locationType}</td>
                            <td>
                                <Button
                                    onClick={() => deleteLocationById(location.id)}
                                    variant="danger"
                                >
                                    Usuń
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default LocationPanel;
