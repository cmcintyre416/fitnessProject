import React from 'react';
import ShowExcercise from './ShowExcercise.js';

class WorkoutList extends React.Component {

    constructor() {
        super()
        this.state = {
            workouts: [],
            workout: "",
            selectedWorkout: [],
            inputForm: {
                excercise: "",
                sets: "",
                reps: "",
                weight: "",
                notes: ""
            }
        }
        // bind handle change to our app
        this.handleChange = this.handleChange.bind(this);
        this.addWorkout = this.addWorkout.bind(this);
        this.removeWorkout = this.removeWorkout.bind(this);
        this.showExcercise = this.showExcercise.bind(this);
        this.updateFormFields = this.updateFormFields.bind(this);
    }

    updateFormFields(field, value) {
        const { inputForm } = this.state;
        const newForm = inputForm;
        newForm[field] = value;
        this.setState({
            inputForm: newForm
        })
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addWorkout(e) {
        const { inputForm } = this.state;
        e.preventDefault();
        // we are making an object below on click
        // this will allow us to push our content into the excercise array from the form
        // we want to have our name as a value in here because this is what is going to allow us to have specific objects to hold this information, and allow us to have a home for it.
        const newWorkout = {
            name: this.state.workout,
            exercises: [],
        };

        newWorkout.exercises.push(inputForm);

        console.log(newWorkout);
        
        // here we are making a variable called workoutState that we can set equal to / create an array that contains the contents of the workouts taken from the workout input
        const workoutState = Array.from(this.state.workouts);

        // we can then push the workout state array into our newWorkout one created
        workoutState.push(newWorkout);
        // set the state with the new workout state
        
        // set the state of our workouts to workoutState and then set the workout to "" so that it empties after submit
        this.setState({
            workouts: workoutState,
            workout: ""
        });
    }

    removeWorkout(index) {
        // take a copy of our current state
        const workoutState = Array.from(this.state.workouts);
        // splice out workout / if index[number] is selected splice out that 1 element
        workoutState.splice(index, 1);
        // set the state with the new workout state
        this.setState({
            workouts: workoutState
        })
    }

    showExcercise(index) {
        this.setState({
            selectedWorkout: this.state.workouts[index]
        })
    }



    render() {
        return (
            <div className="workoutWrapper">
                <form onSubmit={this.addWorkout}>
                    <input type="text" name="workout" value={this.state.workout} onChange={this.handleChange} />
                    <button>Add Workout</button>
                </form>
                <div className="workoutDisplay">
                    <div className="workoutContent">
                        <ShowExcercise
                            selectedWorkout={this.state.selectedWorkout}
                            updateFormFields={this.updateFormFields}
                            addWorkout={this.addWorkout}
                        />
                    </div>
                </div>
                <div className="workoutList">
                    <div>
                        <ul className="workouts">
                        {this.state.workouts.map((workout, i) =>{
                                return <WorkoutItem data={workout} key={`workout-${i}`} remove={this.removeWorkout} workoutIndex={i} show={this.showExcercise}/>
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const WorkoutItem = (props) => {
    return (
        <li className="workout">
            <span onClick={() => props.show(props.workoutIndex)}>{props.data.name}</span>
            <button onClick={() => props.remove(props.workoutIndex)}>𝗫</button>
        </li>
    );
};

export default WorkoutList;





