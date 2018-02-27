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
            const userData = res.val();
            const dataArray = [];
            for(let objKey in userData) {
                userData[objKey].key = objKey;
                dataArray.push(userData[objKey])
            }
            this.setState({
                savedWorkouts: dataArray
            })
            console.log(dataArray);
        });
    }

    getWorkoutPayload(workoutPayload) {
        // get this into the exercises array in the state of this file.
        // console.log(workoutPayload) 
        // const newExcerciseInfo = Array.from(this.state.savedWorkouts);
        const dbRef = firebase.database().ref();

        const newExcerciseInfo = workoutPayload;

        dbRef.push(newExcerciseInfo);
        
        // this.setState({
        //     savedWorkouts: newExcerciseInfo
        // });
    }

    removeWorkout(workoutId) {
        console.log(workoutId);
        const dbRef = firebase.database().ref(workoutId);
        dbRef.remove();
    }

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
                                removeWorkout={this.removeWorkout}
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