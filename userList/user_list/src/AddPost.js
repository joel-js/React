import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const AddPost = () => {
  const [userId, setName] = useState("");
  const [title, setAge] = useState("");
  const [body, setDesignation] = useState("");

  const navigate = useNavigate();

  useEffect(
    (item) => {
      if (userId === "") {
      }
    },
    [userId, title, body]
  );

  const submitForm = (event) => {
    event.preventDefault();
    console.log(typeof userId);
    Axios.post("https://jsonplaceholder.typicode.com/posts", {
      userId: userId,
      title: title,
      body: body,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // navigate('/posts');
  };

  return (
    <div className="addUser">
      <h2>Add Post</h2>
      <div className="row">
        <form className="col s8 offset-s4">
          <div className="row">
            <div className="input-field col s6">
              <input
                key="userId"
                type="text"
                className="validate"
                onBlur={(event) => setName(event.target.value)}
              />
              <label>userId</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                key="title"
                type="text"
                className="validate"
                onBlur={(event) => setAge(event.target.value)}
              />
              <label>title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                key="body"
                type="text"
                className="validate"
                onBlur={(event) => setDesignation(event.target.value)}
              />
              <label>body</label>
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

export default AddPost;
