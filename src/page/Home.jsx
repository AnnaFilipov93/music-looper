import { Link } from 'react-router-dom';
import Board from './Board';


const Home = () => {

    return (
        <div>
            <h1>
                Home page  
            </h1>

            Will be created soon

            <div>
                <Link to="/board">Try without a user</Link>
            </div>
            
        </div>
    )
}
export default Home;