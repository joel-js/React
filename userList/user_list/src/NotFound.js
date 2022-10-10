import {Link} from 'react-router-dom'
import {getUsers,getPosts, postUsers, postPosts} from './Services'
import { useEffect, useState } from 'react'
const NotFound = () => {

    return (
        <div className="Notfound">
            
            <h2>Something went wrong</h2>
            <Link to='/'>go to home</Link>

            <table>
                <th>
                    <tr>1</tr>
                    <tr>2</tr>
                    <tr>3</tr>
                </th>
                <tbody>
                    <tr>
                        <td>*</td>
                        <td>
    
                                    <tr>
                                        <td>Nice</td>
                                        <td>Nice Nice</td>
                                        <td>Nice Nice nice</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                               
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default NotFound;