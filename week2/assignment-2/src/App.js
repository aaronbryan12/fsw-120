import React from "react"
import Card from "./Cards"
import vacationSpots from "./vacationspots"



function App() {

    const vacaSpots = vacationSpots.map (function (a) {
     if (a.price < 500) {
            return <Card place = {a.place} price={"$ " + a.price} timeToGo = {a.timeToGo}/>
        } else if (a.price < 1000) {
            return <Card place = {a.place} price={"$$ " + a.price} timeToGo = {a.timeToGo}/>
        } else {
            return <Card place = {a.place} price={"$$$ " + a.price} timeToGo = {a.timeToGo}/>
        }
    })   
    
    return (
        <div>
            {vacaSpots}
        </div>
    )
}

export default App