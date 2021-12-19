import React from 'react';
import '../TimePicker/TimePicker.scss';



function TimePicker(props) {

    const hoursInput = React.createRef();
    const minutesInput = React.createRef();

    function incrementTime(timeItem, num) {
        let newValue = Number(timeItem.current.value) + 1
        if (newValue > num) {
            newValue = 0
        }
        return timeItem.current.value = newValue
    };
    function decrementTime(timeItem, num) {
        let newValue = Number(timeItem.current.value) - 1
        if (newValue < 0) {
            newValue = num
        }
        return timeItem.current.value = newValue
    };



    return (
        <>
            <form className='time-picker' action="">
                <div className="top">
                    <span>Wybier czas</span>
                    <button className='solid' onClick={(e) => {
                        props.setShowModalcollectTime(false)
                    }}>X</button>
                </div>


                <div className="time">
                    <div className="hours select">
                        <input className="increm" type="button" value="+" onClick={() => {
                            incrementTime(hoursInput, 23)
                        }} />
                        <input className='show' type="text" ref={hoursInput} defaultValue={new Date().getHours()}
                        />
                        <input className="decrem" type="button" value="-" onClick={() => {
                            decrementTime(hoursInput, 23)
                        }} />
                    </div>
                    <span>:</span>
                    <div className="seconds select">
                        <input className="increm" type="button" value="+" onClick={() => {
                            incrementTime(minutesInput, 59)
                        }} />
                        <input className='show' type="text" ref={minutesInput} defaultValue={new Date().getMinutes()}
                            onChange={(e) => {
                                console.log(
                                    e.target.value
                                );
                            }
                            }
                        />
                        <input className="decrem" type="button" value="-" onClick={() => {
                            decrementTime(minutesInput, 59)
                        }} />
                    </div>
                </div>

                <button className='solid' onClick={(e) => {
                    e.preventDefault();

                    
                        props.setCollectTime([
                            {
                                takeaway: {
                                    hours: hoursInput.current.value,
                                    minutes: minutesInput.current.value,
                                }
                            }
                            , {
                                delivery: {
                                    hours: hoursInput.current.value,
                                    minutes: minutesInput.current.value,
                                }
                            }
                        ]);
                        props.setShowModalcollectTime(false);
                  
                }

                }>Potwierdzam</button>
            </form>
        </>
    )

}

export default TimePicker