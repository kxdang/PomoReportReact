import React, { Component } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard"
import "./PomodoroReport.css"

//utility functions
const pomodorosMinutes = pomos => {
    return `${pomos * 25}`;
};

function increaseOrDecrease(currentMonth, lastMonth) {
    if (currentMonth - lastMonth >= 0) {
        return "an increase"
    } else {
        return "a decrease"
    }
}

//CONSTANTS
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date();
const lastMonth = date.getMonth() - 1
const monthNameText = MONTHS[lastMonth]



class PomodoroReport extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '', copied: false }
        this.onHandleClick = this.onHandleClick.bind(this)
        this.generateReport = this.generateReport.bind(this)
    }


    onHandleClick() {
        this.setState({
            value: `I've completed ${this.props.currentMonthPomo} Pomodoro's (${pomodorosMinutes(this.props.currentMonthPomo)} minutes) in ${monthNameText}. This is ${increaseOrDecrease(this.props.currentMonthPomo, this.props.lastMonthPomo)} of productivity by ${Math.abs(this.props.currentMonthPomo - this.props.lastMonthPomo)} Pomodoro's compared to last month, a difference of ${Math.abs(pomodorosMinutes(this.props.currentMonthPomo) - pomodorosMinutes(this.props.lastMonthPomo))} minutes. Having reflections allow me to measure how much I've done and what I've accomplished to achieve my goals. It helps me stay accountable in my journey in completing ${this.props.currentGoal}`,
        })
        alert('copied')
    }

    generateReport() {
        this.setState({ value: `I've completed ${this.props.currentMonthPomo} Pomodoro's (${pomodorosMinutes(this.props.currentMonthPomo)} minutes) in ${monthNameText}. This is ${increaseOrDecrease(this.props.currentMonthPomo, this.props.lastMonthPomo)} of productivity by ${Math.abs(this.props.currentMonthPomo - this.props.lastMonthPomo)}  Pomodoro's compared to last month, a difference of ${Math.abs(pomodorosMinutes(this.props.currentMonthPomo) - pomodorosMinutes(this.props.lastMonthPomo))} minutes. Having reflections allow me to measure how much I've done and what I've accomplished to achieve my goals. It helps me stay accountable in my journey in completing ${this.props.currentGoal}` })
    }

    render() {
        const { currentMonthPomo, lastMonthPomo, currentGoal } = this.props

        return (

            <div>

                <button onClick={this.generateReport}>Generate Report</button>
                <CopyToClipboard text={this.state.value} onCopy={() => this.setState({ copied: true })}>
                    <button onClick={this.onHandleClick}>Copy to clipboard with button</button>
                </CopyToClipboard>

                <p className="PomodoroReport">
                    I've completed {currentMonthPomo} Pomodoro's ({pomodorosMinutes(currentMonthPomo)} minutes) in {monthNameText}. This is {increaseOrDecrease(currentMonthPomo, lastMonthPomo)} of productivity by {Math.abs(currentMonthPomo - lastMonthPomo)}  Pomodoro's compared to last month, a difference of {Math.abs(pomodorosMinutes(currentMonthPomo) - pomodorosMinutes(lastMonthPomo))} minutes. <br /> <br /> Having reflections allow me to measure how much I've done and what I've accomplished to achieve my goals. It helps me stay accountable in my journey in completing {currentGoal}
                </p>

            </div>

        )

    }

}


export default PomodoroReport;