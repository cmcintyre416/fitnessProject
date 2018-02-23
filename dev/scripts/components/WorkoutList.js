import React from 'react';
import ShowExcercise from './ShowExcercise.js';

class WorkoutList extends React.Component {

    constructor() {
        super()
        this.state = {
            workouts: [],
            workout: "",
            selectedWorkout: [],
        }
        // bind handle change to our app
        this.handleChange = this.handleChange.bind(this);
        this.addWorkout = this.addWorkout.bind(this);
        this.removeWorkout = this.removeWorkout.bind(this);
        this.showExcercise = this.showExcercise.bind(this);
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addWorkout(e) {
        e.preventDefault();
        // take a copy of our current state
        const newWorkout = {
            name: this.state.workout,
            exercies: []
        };
        
        
        const workoutState = Array.from(this.state.workouts);
        // push a new value onto it
        // this being out workout state (whatever was updated from the handle change workout state/ target value/ input)
        
        workoutState.push(newWorkout);
        // set the state with the new workout state
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
        console.log(index)

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
                        < ShowExcercise  selectedWorkout={this.state.selectedWorkout}/>
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





