import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import api from "../utils/axiosWithAuth";
import "./ComponentCSS/AddTodo.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const AddBucketList = ({ touched, errors, status, values, className }) => {
    const [task, setTask] = useState([]);

    // =============Modal========================
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    // =============Modal========================

    useEffect(() => {
        status && setTask(task => [...task, status]);
    }, [status])

    return (
        <div>
          <Button onClick={toggle}>Add List</Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Add a new Bucketlist</ModalHeader>
            <ModalBody>
            <div className="form-contain">
            <div className="add-todo">
                <Form className="todo-form">
                    <div className="input-contain">
                        <Field
                            type="text"
                            name="name"
                            placeholder="Add a Bucket List"
                        />
                        {touched.name && errors.name && (
                            <p className="todoReq">{errors.name}</p>
                        )}
                    </div>
                    <div className="input-contain">
                        <Field
                            type="date"
                            name="deadline"
                            placeholder="Add a Deadline"
                        />
                    </div>
                    <div className="input-contain">
                        <Field
                            component="textarea"
                            type="text"
                            name="description"
                            placeholder="Add a Link"
                        />
                        {touched.description && errors.description && (
                            <p className="todoReq">{errors.description}</p>
                        )}
                    </div>
                    <div>
                        <label>Public List?
                        <Field
                                type="checkbox"
                                name="is_private"
                                checked={values.is_private}
                            />
                        </label>
                    </div>
                    <button type="submit" onClick={toggle}>Add List</button>
                </Form>
            </div>
        </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
}
const FormikAddBucketList = withFormik({
    mapPropsToValues({ name, deadline, description, is_private }) {
        return {
            name: name || "",
            deadline: deadline || "",
            description: description || "",
            is_private: is_private || false,
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please add a list name"),
        description: Yup.string().required("Please add a link")
    }),

    handleSubmit(values, { resetForm, setStatus }) {
        api
            .post('/lists', values)
            .then(res => {
                setStatus(res.data);
            })
            .catch(error => console.log('Add List Error', error));

        resetForm();
    }
})(AddBucketList);

export default FormikAddBucketList;
