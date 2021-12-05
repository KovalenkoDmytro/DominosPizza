import React, {useEffect} from 'react';




function TimePicker(props) {

    const hoursInput = React.createRef();
    const minutesInput = React.createRef();

    function incrementTime(timeItem){
        return timeItem.current.value = Number(timeItem.current.value) + 1 
    };
    function decrementTime(timeItem){
        return timeItem.current.value = Number(timeItem.current.value) - 1 
    };

    return (
        <>
            <form action="">
                <div className="hours">
                    <input className="hoursIncrem" type="button" value="+" onClick={()=>{
                        incrementTime(hoursInput)
                    }}/>
                    <input type="text" ref={hoursInput} value={new Date().getHours()}/>
                    <input className="hoursDecrem" type="button" value="-" onClick={()=>{
                        decrementTime(hoursInput)
                    }}/>
                </div>
                <div className="seconds">
                    <input className="secondsIncrem" type="button" value="+" onClick={()=>{
                        incrementTime(minutesInput)
                    }}/>
                    <input type="text" ref={minutesInput} value={new Date().getMinutes()}/>
                    <input className="secondsDecrem" type="button" value="-" onClick={()=>{
                        decrementTime(minutesInput)
                    }}/>
                </div>
                <button type="submit">Potwierdzam</button>
            </form>
        </>
    )

}

export default TimePicker