const PetForm = props => {
    const {form, errors, handleInputChange, handleSubmit, submitValue} = props;
    return (
        <form className="col-6 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Pet Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    className="form-control"
                    value={form.name}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.name ? errors.name.message : ""}</span>
            </div>
            <div className="form-group">
                <label>Pet Type:</label>
                <input 
                    type="text" 
                    name="type" 
                    className="form-control"
                    value={form.type}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.type ? errors.type.message : ""}</span>
            </div>
            <div className="form-group">
                <label>Pet Description:</label>
                <input 
                    type="text" 
                    name="description" 
                    className="form-control"
                    value={form.description}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.description ? errors.description.message : ""}</span>
            </div>
            <h2>Skills (optional):</h2>
            <div className="form-group">
                <label>Skill 1:</label>
                <input 
                    type="text" 
                    name="skill1" 
                    className="form-control"
                    value={form.skill1}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.skill1 ? errors.skill1.message : ""}</span>
            </div>
            <div className="form-group">
                <label>Skill 2:</label>
                <input 
                    type="text" 
                    name="skill2" 
                    className="form-control"
                    value={form.skill2}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.skill2 ? errors.skill2.message : ""}</span>
            </div>
            <div className="form-group">
                <label>Skill 3:</label>
                <input 
                    type="text" 
                    name="skill3" 
                    className="form-control"
                    value={form.skill3}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.skill3 ? errors.skill3.message : ""}</span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-success"/>
            
        </form>
    );
}

export default PetForm;