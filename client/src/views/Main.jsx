import {Link} from '@reach/router';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import AlphabetList from 'react-alphabet-list';

const Main = props => {
    const [pets, setPets] = useState([]);
    const [bounce, setBounce] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data.results))
            .catch(err => console.log(err));
    },[bounce])


    return(
        <>
            <div>
                <h1>Pet Shelter</h1>
                <h3>These pets are looking for a good home</h3>
                <Link to="/new">Add a pet to the shelter</Link>
            </div>
            <table className="table table-hover col-6 mx-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet, i) => <tr key={i}>
                                                        <td>
                                                            
                                                            <span>{pet.name}</span>
                                                        </td>
                                                        <td>
                                                            <span>{pet.type}</span>
                                                        </td>
                                                        <td>
                                                            <Link to={`/details/${pet._id}`} >details</Link><span>   |   </span> 
                                                            <Link to={`/edit/${pet._id}`} >edit</Link>
                                                        </td>
                                                    </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Main;
