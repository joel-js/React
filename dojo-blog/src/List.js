const List = ({list}) => {
    
    return (
            <div className="list">
            {list.map( (item) => {
                return  <div className="item-preview" key={ item.id } >
                            <h2>{ item.title }</h2>
                            <p>written by { item.author }</p>
                        </div>
            })}
        </div>
    );
}
 
export default List;