const UserList = () => {
    return (
        <div className="userList">
            <h2>User List</h2>
            <link className="waves-effect waves-light btn" href="#modal1"><i className="material-icons left">delete</i> delete </button>
            
            <div key="modal1" className="modal">
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        </div>
    );
}
 
export default UserList;