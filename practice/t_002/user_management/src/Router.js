import {Route} from 'react-router-dom';
import Home from './Home';

const Router = () => {
    return (
        <Route path='/' element ={<Home />} />
    );
}
 
export default Router;