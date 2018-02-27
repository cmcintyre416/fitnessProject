import React from 'react';
// Return element for new_array
import moment from 'moment';

// date: {moment{props.entry.date, "x"}

const CreateWorkoutCard = (props)=> {
    return (
        <div className="createWorkoutCard">
            <h5 className="createWorkoutCard__title">Workout : {moment().format("MMM Do YY")}</h5>
            <div className="createWorkoutCard__button"><button 
            onClick={() => props.removeWorkout(props.workout.key)}>𝗫</button>
            </div>
            <ul className="createWorkoutCard__list">
            {props.workout.map((workoutItem, i) =>{
                return(
                <div className="createWorkoutCard__listItemWrapper" key={`-${i}`}>
                    <li className="createWorkoutCard__listItem"><span className="createWorkoutCard__listItem-blue">Exercise: </span> {workoutItem.name}</li>
                    <li className="createWorkoutCard__listItem"><span className="createWorkoutCard__listItem-blue">Sets: </span> {workoutItem.sets}</li>
                    <li className="createWorkoutCard__listItem"><span className="createWorkoutCard__listItem-blue"> Reps: </span> {workoutItem.reps}</li>
                    <li className="createWorkoutCard__listItem"><span className="createWorkoutCard__listItem-blue">Weight: </span> {workoutItem.weight}</li>
                </div>
                )
            })}
            </ul>
        </div>
    )
}

export default CreateWorkoutCard;