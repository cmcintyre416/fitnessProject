import React from 'react';

class ShowExcercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                excercise : "",
                sets: "",
                reps: "",
                weight: "",
                notes: ""
            }
        }
    }

    createWorkoutPayload() {
        const { form } = this.state;
    }

    handleSubmit() {
        console.log('here');
        console.log('no, here');
    }

    render() {
        const {
            exercise,
            sets,
            reps,
            weight,
            notes
        } = this.state;

        return (
            <div>
            <div className="displayInfo">
            <h2>{this.props.selectedWorkout.name}</h2>
            </div>
            <div>
            <form className="excerciseForm" action="" onSubmit={this.props.addWorkout}>

                <div className="excerciseInput">
                    <label htmlFor="addName">Excercise</label>
                    <input 
                        type="text" 
                        id="addName" 
                        name="excercise" 
                        value={exercise} 
                        // controlled input
                        onChange={(e) => this.props.updateFormFields("excercise", e.target.value)}
                    />
                </div>
                <div className="setsInput">
                    <label htmlFor="addSets">Sets</label>
                    <input 
                        type="number" 
                        id="addSets" 
                        name="sets" 
                        value={sets} 
                        onChange={(e) => this.props.updateFormFields("sets", e.target.value)}
                    />
                </div>
                <div className="repsInput">
                    <label htmlFor="addReps">Reps</label>
                    <input 
                        type="number" 
                        id="addReps" 
                        name="reps" 
                        value={reps} 
                        onChange={(e) => this.props.updateFormFields("reps", e.target.value)}
                    />
                </div>
                <div className="weightInput">
                    <label htmlFor="addWeight">Weight</label>
                    <input 
                        type="number" 
                        id="addWeight" 
                        name="weight" 
                        value={weight} 
                        onChange={(e) => this.props.updateFormFields("weight", e.target.value)}
                    />
                </div>
                <div className="notesInput">
                    <label htmlFor="addNotes"></label>
                    <textarea 
                        id="addNotes" 
                        name="notes" 
                        cols="30" 
                        rows="20" 
                        onChange={(e) => this.props.updateFormFields("notes", e.target.value)}
                    />

                </div>
                <button type="submit">
                    Add Excercise
                </button>
            </form>
            </div>
            </div>
        );
    }


}
export default ShowExcercise;