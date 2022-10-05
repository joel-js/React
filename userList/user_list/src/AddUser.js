import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUsers } from "./Services";
import SubmitForm from "./SubmitForm";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [designation, setDesignation] = useState("");
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  // useEffect( () => {
  //     console.log(typeof(name))
  //     postUsers({name: name, age:age, designation: designation})
  //     navigate('/');
  // },[submit])
  // postUsers({name: name, age:age, designation: designation})
  const submitForm = (event) => {
    event.preventDefault();
    // setSubmit(true);
    SubmitForm({ name, age, designation });
  };

  return (
    <div className="addUser">
      <h2>AddUser</h2>
      <div className="row">
        <form className="col s8 offset-s4">
          <div className="row">
            <div className="input-field col s6">
              <input
                key="name"
                type="text"
                className="validate"
                onBlur={(event) => setName(event.target.value)}
              />
              <label>Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                key="age"
                type="text"
                className="validate"
                onBlur={(event) => setAge(event.target.value)}
              />
              <label>Age</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                key="designation"
                type="text"
                className="validate"
                onBlur={(event) => setDesignation(event.target.value)}
              />
              <label>Designation</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <button
                className="waves-effect waves-light btn"
                onClick={submitForm}
              >
                <i className="material-icons left">chevron_right</i>submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
