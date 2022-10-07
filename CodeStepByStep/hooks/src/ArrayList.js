import { Table } from "react-bootstrap";
import "./ArrayList.css"
import {Fragment} from "react"

function ArrayList() {
    const students = [
        {
            name: "ekta", email: "evarsani@gmail.com", phone: 145321211, add: [
                { Hn: 10, city: "rajkot", country: "India" },
                { Hn: 10, city: "rajkot", country: "India" },
                { Hn: 10, city: "rajkot", country: "India" },
                { Hn: 10, city: "rajkot", country: "India" }
            ]
        },
        {
            name: "sahaj", email: "sjadav@gmail.com", phone: 224346350, add: [
                { Hn: 10, city: "rajkot", country: "India" },
                { Hn: 10, city: "rajkot", country: "India" },
                { Hn: 10, city: "rajkot", country: "India" },
                { Hn: 10, city: "rajkot", country: "India" }
            ]
        },
        {
            name: "jhanvi", email: "jkotadiya@gmail.com", phone: 10724121, add: [
                { Hn: 10, city: "rajkot", country: "India" },
                { Hn: 10, city: "rajkot", country: "India" },
                { Hn: 10, city: "rajkot", country: "India" },
                { Hn: 10, city: "rajkot", country: "India" }
            ]
        },
        {
            name: "sivangi", email: "sijadav@gmail.com", phone: 16587400, add: [
                { Hn: 10, city: "rajkot", country: "India" },
                { Hn: 10, city: "rajkot", country: "India" },
                { Hn: 10, city: "rajkot", country: "India" },
                { Hn: 10, city: "rajkot", country: "India" }
            ]
        },
    ];

    return (
        <Fragment>
            <Table variant="dark" className="dark" striped hover size="sm" >
                <thead variant="p-3">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, i) => (
                        <tr key={i} >
                            <td>{i}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>
                                <Table variant="dark" striped hover size="sm">
                                    <tbody>
                                        {
                                            student.add.map((item, i) => 
                                                <tr key={i}>
                                                    <td>{item.Hn}</td>
                                                    <td>{item.city}</td>
                                                    <td>{item.country}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    ))}
                </tbody>


            </Table>
        </Fragment>
    );
}

export default ArrayList;