
const Delete = ({id}) => {
    const deleteItem = () => {
        let response = window.confirm("Are You sure ?"+id)
        if( response ){
            
        }
    }
    return (
            <div className="Delete">
                <button className="waves-effect waves-light btn red" onClick={(event) => {event.preventDefault(); deleteItem(); } }>Delete</button>
            </div>

    );
}
 
export default Delete;