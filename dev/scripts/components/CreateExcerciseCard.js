import React from 'react';

export default function(props) {
    return (
        <div className="createCard">
            <ul className="createCard__list">
                <li className="createCard__listItem">Excercise: {props.excercise.name}</li>
                <li className="createCard__listItem">Sets: {props.excercise.sets}</li>
                <li className="createCard__listItem">Reps: {props.excercise.reps}</li>
                <li className="createCard__listItem">Weight: {props.excercise.weight}</li>
                <li className="removeExcercise">
                    <button onClick={() => props.remove(props.excerciseIndex)}>𝗫</button>
                </li>
            </ul>
            
        </div>
    )
}
