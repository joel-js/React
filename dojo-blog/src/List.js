import { Link } from 'react-router-dom'

const List = ({list,mainTitle,deleteItem}) => {

    return (
            <div className="list">
                <h2>{mainTitle}</h2>
                {list.map( (item) => {
                    
                    // let deletevisibility =" "
                    // if( deleteItem === undefined) deletevisibility = "hidden"
                    // console.log("yees",deletevisibility)

                    return  <div className="item-preview" key={ item.id } >
                                <Link exact to={ 'blogs/'+item.id }>
                                    <h2>{ item.title }</h2>
                                    <p>written by { item.author }</p>
                                </Link>
                                <button onClick={ () => deleteItem(item.id) } >delete</button>
                            </div>
                })}
            </div>
    );
}
 
export default List;