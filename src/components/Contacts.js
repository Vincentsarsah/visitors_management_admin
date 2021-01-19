import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";
import RandomCode from './RandomCode'
import StaffList from './StaffList';

const Contacts = () => {

	var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])

        const addOrEdit = (obj) => {
            if (currentId == '')
                firebaseDb.child('contacts').push(
                    obj,
                    err => {
                        if (err)
                            console.log(err)
                        else
                            setCurrentId('')
                    })
            else
                firebaseDb.child(`contacts/${currentId}`).set(
                    obj,
                    err => {
                        if (err)
                            console.log(err)
                        else
                            setCurrentId('')
                    })
        }
    

        const onDelete = id => {
            if (window.confirm('Are you sure to delete this record?')) {
                firebaseDb.child(`contacts/${id}`).remove(
                    err => {
                        if (err)
                            console.log(err)
                        else
                            setCurrentId('')
                    })
            }
        }

  return (
        <>
            <div className="row">
                <div className="col-md-7">
                    <ContactForm {...({ currentId, contactObjects, addOrEdit })} ></ContactForm>
                </div>
                <div>
                    <div className = "random_code">
                    <RandomCode />
                    </div>
                   
                    <div>
                    <StaffList></StaffList>
                    </div>
                    
                </div>
                <div className="col-md-14">
                    <table className="table table-border table-stripped bg-light">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <tr key={key}>
                                        <td>{contactObjects[key].fullName}</td>
                                        <td>{contactObjects[key].mobile}</td>
                                        <td>{contactObjects[key].email}</td>
                                        <td>{contactObjects[key].company}</td>
                                        <td className="bg-dark">
                                            <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                           </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Contacts;