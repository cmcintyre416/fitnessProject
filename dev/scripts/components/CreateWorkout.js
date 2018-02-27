import React, { Component } from 'react';
import AddExcercise from './AddExcercise.js';
import CreateExcerciseCard from './CreateExcerciseCard.js';
import moment from 'moment';

class CreateWorkout extends Component {
    constructor() {
        super();

        this.state = {
            newWorkout: [],
            addExcerciseButton: true,
        }
        this.getExcercisePayload = this.getExcercisePayload.bind(this);
        this.removeExcercise = this.removeExcercise.bind(this);
    } 

    toggleAddExcercise() {
        const { addExcerciseButton } = this.state;

        this.setState({
            addExcerciseButton: !this.state.addExcerciseButton
        })
    }

    getExcercisePayload(excercisePayload) {
        // get this into the exercises array in the state of this file. 
        const newExcerciseInfo = Array.from(this.state.newWorkout);
        newExcerciseInfo.push(excercisePayload);

        this.setState({ 
            newWorkout: newExcerciseInfo
        });
        this.toggleAddExcercise();

    }

    removeExcercise(index) {
        // take a copy of our current state
        const excerciseState = this.state.newWorkout;
        // splice out Excercise / if index[number] is selected splice out that 1 element
        excerciseState.splice(index, 1);
        // set the state with the new Excercise state
        this.setState({
            excercises: excerciseState
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const sendWorkout = this.state.newWorkout;
        this.props.getWorkoutPayload(sendWorkout);

        this.setState({
            newWorkout: [],
        })
    }

    render() {
        const { addExcerciseButton } = this.state;
        return(
            <div>
                <div className="createWorkout">
                    <button className="createWorkout__button" 
                        onClick={() => this.toggleAddExcercise()}
                    >
                        Add to your {moment().format("MMM Do")} Workout
                    </button>
                        { addExcerciseButton &&
                            < AddExcercise 
                                getExcercisePayload={this.getExcercisePayload} 
                            />
                        }
                </div>
                <div className="createCard__wrapper">
                    {this.state.newWorkout.map((excercise, i) =>{
                        return (
                            < CreateExcerciseCard 
                                excercise={excercise} 
                                key={`excercise-${i}`}
                                remove={this.removeExcercise}
                                excerciseIndex={i}
                            />
                        )
                    })}
                </div>
                <button className="workoutApp__submitWorkout" 
                onClick={(e) => this.handleSubmit(e)}
                >
                    Save
                </button>
            </div>
        );
    }
}

export default CreateWorkout;