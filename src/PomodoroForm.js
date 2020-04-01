import React, { Component } from 'react'
import PomodoroReport from './PomodoroReport';

export default class PomodoroForm extends Component {
    constructor(props) {
        super(props);
        this.state = { currentMonthPomo: 0, lastMonthPomo: 0, currentGoal: "", generateReport: false }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit(evt) {
        alert('SUBMITTED')
        evt.preventDefault();
    }
    render() {
        const { currentMonthPomo, lastMonthPomo, currentGoal } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div style={{ display: `flex`, flexDirection: `column` }}>
                        <label>
                            Current Month:
                        <input type="number" name="currentMonthPomo" value={this.state.currentMonthPomo} placeholder="Number of Pomo" onChange={this.handleChange} />
                        </label>

                        <label>
                            Last Month:
                        <input type="number" name="lastMonthPomo" value={this.state.lastMonthPomo} placeholder="Hello" onChange={this.handleChange} />
                        </label>

                        <label>
                            Current Goal:
                        <input type="text" name="currentGoal" value={this.state.currentGoal} placeholder="Current Goal" onChange={this.handleChange} />
                        </label>
                    </div>

                </form>
                <PomodoroReport currentMonthPomo={currentMonthPomo} lastMonthPomo={lastMonthPomo} currentGoal={currentGoal} />
            </div>
        )
    }
}
