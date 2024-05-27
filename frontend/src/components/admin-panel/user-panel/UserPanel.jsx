import { Button, Table } from "react-bootstrap";
import PanelHeader from "../PanelHeader";
import { useEffect, useState } from "react";
import { deleteUserById, getUsers } from "../../../services/userService";
import { getLoginRequest } from "../../../routes/userAuthorization";

const UserPanel = () => {
    const fields = ["UserId", "Email", "Role", "Actions"];
    const [users, setUsers] = useState([]);

    const deleteUser = (id) => {
        console.log(id);
        deleteUserById(id, getLoginRequest())
            .then((res) => {
                console.log(res);
                setUsers(users.filter((user) => user.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getUsers(getLoginRequest())
            .then((response) => {
                console.log('test');
                console.log(response.data);
                setUsers(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <PanelHeader>Panel zarządzania użytkownikami</PanelHeader>
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
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Button
                                    onClick={() => deleteUser(user.id)}
                                    variant="danger"
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default UserPanel;
