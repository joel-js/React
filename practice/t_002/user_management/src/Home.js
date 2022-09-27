import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; 
import "primeicons/primeicons.css";   
import { Button } from 'primereact/button';
const Home = () => {
    return (
        <div className="Home">
            <h2>Home</h2>
            <Button label="Add" className = "p-button-raised p-button-text" icon="pi pi-plus" />
        </div>
    );
}
 
export default Home;