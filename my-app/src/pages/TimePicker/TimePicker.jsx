import React, {useEffect} from 'react';




function TimePicker(props) {

    const hoursInput = React.createRef();
    const minutesInput = React.createRef();

    function incrementTime(timeItem, num){
        let newValue = Number(timeItem.current.value) + 1 
        if(newValue > num){
            newValue = 0
        }
        return timeItem.current.value = newValue
    };
    function decrementTime(timeItem, num){
        let newValue = Number(timeItem.current.value) - 1 
        if(newValue < 0){
            newValue = num
        }
        return timeItem.current.value = newValue
    };

    

    return (
        <>
            <form action="">
                <div className="hours">
                    <input className="hoursIncrem" type="button" value="+" onClick={()=>{
                        incrementTime(hoursInput ,23)
                    }}/>
                    <input type="text" ref={hoursInput} value={new Date().getHours()} onChange={(e)=>{
                        console.log(e.target);
                    }}/>
                    <input className="hoursDecrem" type="button" value="-" onClick={()=>{
                        decrementTime(hoursInput,23)
                    }}/>
                </div>
                <div className="seconds">
                    <input className="secondsIncrem" type="button" value="+" onClick={()=>{
                        incrementTime(minutesInput, 59)
                    }}/>
                    <input type="text" ref={minutesInput} value={new Date().getMinutes()}/>
                    <input className="secondsDecrem" type="button" value="-" onClick={()=>{
                        decrementTime(minutesInput ,59)
                    }}/>
                </div>
                <button type="submit">Potwierdzam</button>
            </form>
        </>
    )

}

export default TimePicker