import React, { Component } from 'react';

export default class HoursOfOp extends Component {
  render() {
    const { desktop = false} = this.props;
    const schedule = [
        {
            dayName: "Monday",
            start: '11:30 am',
            end: '8:30 pm',
            closed: false
        },
        {
            dayName: "Tuesday",
            start: '11:30 am',
            end: '8:30 pm',
            closed: false
        },
        {
            dayName: "Wednesday",
            start: '11:30 am',
            end: '8:30 pm',
            closed: false
        },
        {
            dayName: "Thursday",
            start: '11:30 am',
            end: '8:30 pm',
            closed: false
        },
        {
            dayName: "Friday",
            start: '11:30 am',
            end: '8:30 pm',
            closed: false
        },
        {
            dayName: "Saturday",
            start: '11:30 am',
            end: '8:30 pm',
            closed: false
        },
        {
            dayName: "Sunday",
            start: '11:00 am',
            end: '8:30 pm',
            closed: true
        }
    ]

    const renderSchedule = () => {
        return schedule.map((day, index) => (
            <DayHoursRow
                key={index}
                day={day.dayName}
                start={day.start}
                end={day.end}
                closed={day.closed}
            />
        ))
    }

    return (
    <div className={`hours-of-operations ${desktop ? 'desktop-hours' : 'mobile-hours'}`}>
        <div className="hours-of-operations-title">Hours of Operations</div>
        <div>
            {renderSchedule()}
        </div>
    </div>
    )
  }
}

const DayHoursRow = ({day, start, end, closed}) => {


    return (
    <div className="day-hours-row">
        <div>{day}</div>
        <div>
            {closed ? <div>Closed</div> : <div>{`${start} - ${end}`}</div>}
        </div>
    </div>
    );
}