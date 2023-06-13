import React from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { v4 as uuidv4 } from 'uuid';            //to automatically generate uinquie id for each item




const helpers = {
    newTimer: (timer) => {
        return timer
    }
}

class TimersDashboard extends React.Component {

    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuidv4(),
                elapsed: 5456099,
                runningSince: null,
                editFormOpen: true
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuidv4(),
                elapsed: 1273998,
                runningSince: null,
                editFormOpen: true
            },
        ],
    };


    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer)
    }

    createTimer = (timer) => {
        const t = helpers.newTimer(timer)
        this.setState({
            timers: this.state.timers.concat(t)
        })
    }
    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList timers={this.state.timers} />
                    <ToggleableTimerForm
                        isOpen={true}
                        onFormSubmit={this.handleCreateFormSubmit}
                    />
                </div>
            </div>
        );
    }
}


export default TimersDashboard