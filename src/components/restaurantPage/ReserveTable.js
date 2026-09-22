import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReserveTable({ id, restaurants }) {
    const restaurant = restaurants.find(restaurant => restaurant.id == id);

    const [people, setPeople] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const generateTimes = () => {
        const times = [];
        let currentTime = restaurant.startTime;
        while (currentTime < restaurant.endTime) {
            times.push(currentTime);
            const [hours, minutes] = currentTime.split(':');
            currentTime = `${String(+hours + 1).padStart(2, '0')}:${minutes}`;
        }
        return times;
    };

    const times = generateTimes();

    return (
        <div className='mt-5 ms-5' style={{ width: '50%' }}>
            <p className='fs-3'><strong>Reserve Table</strong></p>
            <form>
                <div className="d-flex align-items-center gap-2 mb-4">
                    <label className="form-label mb-0 mx-0">For</label>
                    <select
                        className="form-select mx-0 px-2 py-1"
                        value={people}
                        onChange={e => setPeople(e.target.value)}
                        required
                        style={{ width: '15%' }}
                    >
                        <option value=""></option>
                        {[...Array(restaurant.maxSeatsNumber)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                    <label className="form-label mb-0 mx-0">people,</label>
                    <label className="form-label mb-0 mx-0">on date</label>
                    <input
                        type="date"
                        className="form-control mx-0 px-2 py-1"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        required
                        style={{ width: '25%' }}
                    />
                </div>
                <p>Available Times:</p>
                <div className="d-flex flex-wrap gap-1 mb-2">
                    {times.map((timeOption, index) => (
                        <div key={index} className="form-check">
                            <input
                                className="form-check-input d-none"
                                type="radio"
                                name="time"
                                value={timeOption}
                                id={`time-${index}`}
                                onChange={e => setTime(e.target.value)}
                                required
                            />
                            <label
                                className={`hours btn btn-outline-danger ${time === timeOption ? 'active' : ''}`}
                                htmlFor={`time-${index}`}
                                style={{ width: '130px' }}
                            >
                                {timeOption}
                            </label>
                        </div>
                    ))}
                </div>
                <p className='text-danger'>You will reserve table only for <u>one</u> hour, for more time please contact the restaurant.</p>
                <button
                    type="submit"
                    className="reserve-button btn btn-danger"
                    disabled={!people || !date || !time}
                    style={{ backgroundColor: !people || !date || !time ? '#6c757d' : '#dc3545', border: 'none', width: '100%' }}
                >
                    Complete the Reservation
                </button>
            </form>
        </div>
    );
}

export default ReserveTable;
