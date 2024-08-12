import React from 'react'
import { useState, useEffect,useRef } from 'react'

export default function Flashcard({flashcard}){
    const [flip, setFlip] = useState(false)
    const [height, setHeight]= useState('initial')

    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight(){
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }


    useEffect(() => setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])

    useEffect(()=>{
        window.addEventListener("resize", setMaxHeight)
        return () => window.removeEventListener("resize", setMaxHeight)
    })
    return(
        <>
            <div className={`card ${flip ? "flip" : ""}`}
            style={{height: height}}
            onClick={() => setFlip(!flip)}>

                <div className="front" ref={frontEl}>
                    {flashcard.question}
                    <div className="flashcard-options">
                        {flashcard.options.map((option, id) => {
                            return <div className='flashcard-option' key={id}>{id+1}-{option}</div>
                        })}
                    </div>
                </div>

                <div className="back" ref={backEl}>
                    {/* <div className="flascard-image">
                        <img src={flashcard.imageUrl} className='max-w-full '/>
                    </div> */}
                    <div className="flashcard-ans">
                        Answer - {flashcard.answer}
                    </div>
                    <br />
                </div>

                {/* {flip ? flashcard.answer : flashcard.question} */}
            </div>
        </>
    )
}