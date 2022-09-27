import {Link} from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="Notfound">
            <h2>Something went wrong</h2>
            <Link to='/'>go to home</Link>
        </div>
    );
}
 
export default NotFound;