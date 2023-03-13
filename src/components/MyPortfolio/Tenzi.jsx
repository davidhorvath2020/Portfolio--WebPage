import React, { useState, useEffect } from "react";


import { nanoid } from 'nanoid'; //random id 
import TenziCard from "./TenziCard";

const Tenzi = () => {

    const [dice, setDice] = useState(allNewDice);
    const [tenzies, setTenzies] = useState(false);
    const [numberOfRolls, setNumberOfRolls] = useState(0);

    useEffect(() => {
        const allHeld = dice.every(x => x.isHeld)
        const firstValue = dice[0].value
        const AllSameValue = dice.every(x => x.value === firstValue)
        if (allHeld && AllSameValue) {
            setTenzies(true)
        }
        // setTenzies(oldTenzies => !oldTenzies)
    },
        [dice]
    )

    function generateNewNumber() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {                 //Itt létrehozom a random számokat és objektumba rakom őket
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewNumber())
        }
        return newDice
    }

    function RollDice() {                   //Ezzel hívja meg a button a üggvényt
        if (!tenzies) {
            setDice(prevDice => prevDice.map(x => {
                return x.isHeld ?
                    x :
                    generateNewNumber()
            }))
            setNumberOfRolls(numberOfRolls => numberOfRolls + 1)
        } else {
            setTenzies(false)
            setDice(allNewDice())
            setNumberOfRolls(0)
        }
    }

    function HoldTheDice(id) {              //Ez a kijelölést csinálja
        setDice(oldDice => oldDice.map(x => {
            return x.id === id ?
                { ...x, isHeld: !x.isHeld } :
                x
        }))
    }

    const DiceElements = dice.map(x => (
        <TenziCard key={x.id} value={x.value} isHeld={x.isHeld}
            HoldTheDice={() => HoldTheDice(x.id)}
        />))

    return (
        <div>
            <div className="Tenzi--Container">
                {tenzies ?

                    <div className="Tenzi--Main">
                        <h1>You won!</h1>
                        <button
                            className="RollDice-Button"
                            onClick={RollDice}>
                            New Game
                        </button>
                    </div>
                    :

                    <div className="Tenzi--Main">
                        <h1>Tenzies</h1>
                        <div>
                            <div className="Tenzi--DiceCardContainer">
                                {DiceElements}
                            </div>
                        </div>
                        <button
                            className="RollDice-Button"
                            onClick={RollDice}>
                            {"Roll"}
                        </button>
                        <div>
                            you rolled:
                            {numberOfRolls}
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default Tenzi;