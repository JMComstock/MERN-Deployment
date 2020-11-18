import {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Show = props => {
    const [pet, setPet] = useState(null);
    const [bounce, setBounce] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err))
    },[props])

    const bouncePet = id => {
        Axios.delete(`http://localhost:8000/api/pets/destroy/${id}`)
            .then(res => {
                if(res.data.results){
                    alert(`You adopted a pet from the shelter.`)
                    setBounce(!bounce);
                }
            })
            .catch(err => console.log(err))
    }

    return(
        pet ?
        <div className="card col-6 mx-auto">
            <h1>Pet Shelter</h1>
            <Link to="/">back to home</Link>
            <Link to={`/edit/${props.id}`}>Edit</Link>
            <h2 className="card-title">Details About:{pet.name}</h2>
            <button 
                className="btn btn-danger" 
                onClick={()=> bouncePet(pet._id)}
                >Adopt  {pet.name}
            </button>
            <div className="card-body">
                <h5 className="card-text">Pet type:</h5> <p>{pet.type}</p>
                <h5 className="card-text">Description: </h5><p>{pet.description}</p>
                <h5 className="card-text">Skills: </h5>
                    <p>{pet.skill1}</p>
                    <p>{pet.skill2}</p>
                    <p>{pet.skill3}</p>
            </div>
        </div> : <p>Loading...</p>
    );
}

export default Show;