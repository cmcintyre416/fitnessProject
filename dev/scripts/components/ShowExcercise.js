import React from 'react';

class ShowExcercise extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
//   { this.props.exercises.map(() =>? ) }
    render() {
        console.log(this.props);
        return (
            <div>
            <div className="displayInfo">
            <h2>{this.props.selectedWorkout.name}</h2>
            </div>
          
            <div>
            <form className="excerciseForm" action="" onSubmit={this.handleSubmit}>

                <div className="excerciseInput">
                    <label htmlFor="addName">Excercise</label>
                    <input type="text" id="addName" name="excercise" value={this.state.exercise} />
                </div>
                <div className="setsInput">
                    <label htmlFor="addSets">Sets</label>
                    <input type="text" id="addSets" name="sets" value={this.state.sets}/>
                </div>
                <div className="repsInput">
                    <label htmlFor="addReps">Reps</label>
                    <input type="text" id="addReps" name="reps" value={this.state.reps}/>
                </div>
                <div className="weightInput">
                    <label htmlFor="addWeight">Weight</label>
                    <input type="text" id="addWeight" name="weight" value={this.state.weight}/>
                </div>
                <div className="notesInput">
                    <label htmlFor="addNotes"></label>
                    <textarea id="addNotes" name="notes" cols="30" rows="20"></textarea>
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