import { useNavigate } from "react-router-dom";
import { postUsers } from "./Services";

const SubmitForm = ({name, age, designation}) => {
    const navigate  = useNavigate();
    console.log(typeof(name))
    postUsers({name: name, age:age, designation: designation})
    navigate('/');
}
 
export default SubmitForm;