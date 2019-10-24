import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import api from "../utils/axiosWithAuth";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AddTask = ({ touched, errors, status, buttonLabel, className }) => {
  const [listItem, setListItem] = useState([]);


  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  useEffect(() => {
    status && setListItem(listItem => [...listItem, status]);
  }, [status]);

  // return (
  //   <div className="form-contain">
  //     <div className="add-list-item">
  //       <Form>
  //         <div>
  //           <Field type="text" name="name" placeholder="Add a Task" />
  //           {touched.name && errors.name && (
  //             <p className="todoReq">{errors.name}</p>
  //           )}
  //         </div>

  //         <div>
  //           <Field type="date" name="deadline" placeholder="Add a Deadline" />
  //         </div>

  //         <div>
  //           <Field
  //             component="textarea"
  //             type="text"
  //             name="description"
  //             placeholder="Add a Description"
  //           />
  //           {touched.description && errors.description && (
  //             <p className="todoReq">{errors.description}</p>
  //           )}
  //         </div>
  //         <button type="submit">Add Task</button>
  //       </Form>
  //     </div>
  //   </div>
  // );

    return (
      <div>
        <Button color="warning" onClick={toggle}>
          Add Task
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Add Task</ModalHeader>
          <ModalBody>
            <Form>
              <div>
                <Field type="text" name="name" placeholder="Add a Task" />
                {touched.name && errors.name && (
                  <p className="todoReq">{errors.name}</p>
                )}
              </div>

              <div>
                <Field
                  type="date"
                  name="deadline"
                  placeholder="Add a Deadline"
                />
              </div>

              <div>
                <Field
                  component="textarea"
                  type="text"
                  name="description"
                  placeholder="Add a Description"
                />
                {touched.description && errors.description && (
                  <p className="todoReq">{errors.description}</p>
                )}
              </div>
              <button type="submit">Add Task</button>
            </Form>
          </ModalBody>
          <ModalFooter>
            {" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };


const FormikAddTask = withFormik({
  mapPropsToValues({ name, deadline, description }) {
    return {
      name: name || "",
      deadline: deadline || "",
      description: description || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please add a task"),
    description: Yup.string().required("Please add a description")
  }),

  handleSubmit(values, { resetForm, setStatus, props }) {
    console.log(props);
    api
      .post(`/lists/${props}/items`, values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(error => console.log("Add Task Error", error));

    resetForm();
  }
})(AddTask);

export default FormikAddTask;
