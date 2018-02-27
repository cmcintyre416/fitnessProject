import React from 'react';

export default function(props) {
    return (
        <div className="createCard">
            <ul className="createCard__list">
                <li className="createCard__listItem"><span className="createCard__listItem--blue">Exercise:</span> {props.excercise.name}</li>
                <li className="createCard__listItem"><span className="createCard__listItem--blue">Sets:</span> {props.excercise.sets}</li>
                <li className="createCard__listItem"><span className="createCard__listItem--blue">Reps:</span> {props.excercise.reps}</li>
                <li className="createCard__listItem"><span className="createCard__listItem--blue">Weight:</span> {props.excercise.weight}</li>
                <li className="createCard__removeExcercise">
                    <button onClick={() => props.remove(props.excerciseIndex)}>𝗫</button>
                </li>
            </ul>
            
        </div>
    )
}
