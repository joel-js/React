import {Link} from 'react-router-dom'
import {getUsers,getPosts, postUsers, postPosts} from './Services'
const NotFound = () => {
    const data =getPosts().then(res => res.data)
    if(data) console.log("Data :"+data)
    return (
        <div className="Notfound">
            
            <h2>Something went wrong</h2>
            <Link to='/'>go to home</Link>
        </div>
    );
}
 
export default NotFound;