import Axios from 'axios';
import {useState, useEffect} from 'react';
import {navigate, Link} from '@reach/router';
import PetForm from '../components/PetForm';

const Edit = props => {

    const [petForm, setPetForm] = useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:"",
    });
    const [errors,setErrors] = useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:"",
    })

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPetForm(res.data.results))
            .catch(err => console.log(err))
    },[props])

    const handleInputChange = e => {
        setPetForm({
            ...petForm,
            [e.target.name]:e.target.value
        })
    }
    


    const handleUpdate = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/pets/update/${props.id}`, petForm)
            .then(res => {
                if(res.data.results){
                    navigate(`/details/${props.id}`)
                }
                else{
                    setErrors(res.data);
                }
            })
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to="/">back to home</Link>
            <h2 className="text-center">Edit </h2>
            <PetForm
                form={petForm}
                handleInputChange={handleInputChange}
                handleSubmit={handleUpdate}
                errors={errors}
                submitValue="Edit Pet"
            />
        </div>
    );
}

export default Edit;