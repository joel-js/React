const Button = ({addCount,count,setCount}) => {
    return (
        <button className="waves-effect waves-light btn" onClick= { () => addCount()}>Add</button>
    );
}
 
export default Button;