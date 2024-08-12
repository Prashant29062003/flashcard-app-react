import React from 'react'
import { useState } from 'react'

export default function Flashcard({flashcard}){
    const [flip, setFlip] = useState(false)
    return(
        <>
            <div className={`flex justify-center items-center relative border border-solid ${flip ? "flip" : ""}`}
            onClick={() => setFlip(!flip)}>

                <div className="front">
                    {flashcard.question}
                    <div className="flascard-options">
                        {flashcard.options.map((option, id) => {
                            return <div className='flashcard-option' key={id}>{id+1}-{option}</div>
                        })}
                    </div>
                </div>

                <div className="back">
                    <div className="flascard-image">
                        <img src={flashcard.image} />
                    </div>
                    Answer - {flashcard.answer}
                    <br />
                </div>

                {flip ? flashcard.answer : flashcard.question}
            </div>
        </>
    )
}