import React, { Component } from 'react';


class AddExcercise extends Component {
    constructor() {
        super();
        this.state = {
            excercise: {
                name: '',
                sets: '',
                reps: '',
                weight: ''
            }
        }
    }

    updateForm(key, value) {
        const { excercise } = this.state;
        const newExcercise = excercise;
        newExcercise[key] = value;

        this.setState({
            excercise: newExcercise,
        })
        // console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault()
        const { excercise } = this.state;
        this.props.getExcercisePayload(excercise);
    }
    
    render() {
        return(
            <div className="addExcercise">
                <h1 className="addExcercise__title">Add Excercise</h1>
                <form className="addExcercise__form">
                    <input className="addExcercise__inputs" 
                        type="text"
                        placeholder="Excercise Name"
                        onChange={(e)=> this.updateForm('name', e.target.value)}
                    />
                    <input className="addExcercise__inputs"
                        type="number"
                        placeholder="Sets"
                        onChange={(e) => this.updateForm('sets', e.target.value)}
                    />
                    <input className="addExcercise__inputs"
                        type="number"
                        placeholder="Reps"
                        onChange={(e) => this.updateForm('reps', e.target.value)}
                    />
                    <input className="addExcercise__inputs"
                        type="number"
                        placeholder="Weight"
                        onChange={(e) => this.updateForm('weight', e.target.value)}
                    />
                    <button className="addExcercise__inputs"
                        onClick={(e) => this.handleSubmit(e)}>
                            Add
                    </button>
                </form>
            </div>
        )
    }
}

export default AddExcercise;