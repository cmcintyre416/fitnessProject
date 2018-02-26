import React from 'react';
import CreateWorkout from './CreateWorkout.js';
import CreateWorkoutCard from './CreateWorkoutCard.js';

class WorkoutApp extends React.Component {
    constructor() {
        super();

        this.state = {
            savedWorkouts: [],
        }
        this.getWorkoutPayload = this.getWorkoutPayload.bind(this);
    }

    componentDidMount() {
        firebase.database().ref().on('value', (res) => {
            console.log(res.val());
        });
    }

    getWorkoutPayload(workoutPayload) {
        // get this into the exercises array in the state of this file.
        // const newExcerciseInfo = Array.from(this.state.savedWorkouts);
        const dbRef = firebase.database().ref();
        
        dbRef.push(this.state.savedWorkouts);

        // this.setState({
        //     savedWorkouts: newExcerciseInfo
        // });
    }

    // getWorkoutPayload(workoutPayload) {
    //     // get this into the exercises array in the state of this file.
    //     console.log(workoutPayload) 
    //     const newExcerciseInfo = Array.from(this.state.savedWorkouts);
    //     newExcerciseInfo.push(workoutPayload);
    //     console.log(this.state);
        
    //     this.setState({
    //         savedWorkouts: newExcerciseInfo
    //     });
    // }

    render() {

        return(
            <div className="workoutApp">
                <div className="workoutApp__wrapper"> 
                    {<CreateWorkout getWorkoutPayload={this.getWorkoutPayload}/>}
                    <div className="workoutApp__savedWorkoutCard">
                        <h4 className="workoutApp__savedTitle">Saved Workouts</h4>
                        {this.state.savedWorkouts.map((workout, i) => {
                            console.log(workout);
                            return (
                                < CreateWorkoutCard
                                workout={workout}
                                key={`workout-${i}`}
                                workoutIndex={i}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default WorkoutApp;