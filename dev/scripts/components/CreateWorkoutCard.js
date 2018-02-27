import React from 'react';
// Return element for new_array
import moment from 'moment';

// date: {moment{props.entry.date, "x"}

const CreateWorkoutCard = (props)=> {
    return (
        <div className="createCard">
            <h5>Workout on: {moment().format("MMM Do YY")}</h5>
            <button onClick={() => props.removeWorkout(props.workout.key)}>𝗫</button>
            <ul className="createCard__list">
            {props.workout.map((workoutItem, i) =>{
                return(
                <div key={`-${i}`}>
                    <li className="createWorkoutCard__listItem">Exercise: {workoutItem.name}</li>
                    <li className="createWorkoutCard__listItem">Sets: {workoutItem.sets}</li>
                    <li className="createWorkoutCard__listItem">Reps: {workoutItem.reps}</li>
                    <li className="createWorkoutCard__listItem">Weight: {workoutItem.weight}</li>
                </div>
                )
            })}
            </ul>
        </div>
    )
}

export default CreateWorkoutCard;