import { useState } from 'react'
import FlashcardLlist from './components/FlashcardList/FlashcardList'

const SAMPLE_FLASHCARDS = [
  {
    id:1,
    imageUrl: "https://www.shutterstock.com/image-vector/illustration-erwin-schroedingers-or-schroedinger-260nw-1453046891.jpg",
    question: "What is quantum mechanics?",
    answer: "A theory in physics that describes the behavior of particles at atomic and subatomic scales.",
    
    options:[
      'A branch of classical physics that studies the behavior of macroscopic objects.',
      'A field in computer science dedicated to the development of software algorithms.',
      'A mathematical discipline focused on the study of complex numbers and their applications.',
      'A theory in physics that describes the behavior of particles at atomic and subatomic scales.',
    ],
  },
  {
    id: 2,
    imageUrl: "https://www.shutterstock.com/image-vector/heisenberg-uncertainty-principle-quantum-mechanics-260nw-1889457775.jpg",
    question: "What is the Heisenberg Uncertainty Principle?",
    answer: "A fundamental limit to the precision with which certain pairs of physical properties can be simultaneously known.",
    
    options: [
      'A principle stating that energy and mass are interchangeable.',
      'A fundamental limit to the precision with which certain pairs of physical properties can be simultaneously known.',
      'A theory that describes the relationship between entropy and temperature.',
      'A rule governing the behavior of electromagnetic waves in a vacuum.',
    ]
  },
  {
    id: 3,
    imageUrl: "https://slideplayer.com/slide/4881863/16/images/4/Big-O+Notation.jpg",
    question: "In the context of computer science, what does 'Big O' notation describe?",
    answer: "The performance or complexity of an algorithm in terms of time or space relative to the input size.",
    
    options: [
      'The performance or complexity of an algorithm in terms of time or space relative to the input size.',
      'The number of bits required to store a variable in memory.',
      'The data transfer rate of a network connection.',
      'The maximum number of processes that can run concurrently on a computer system.',
    ]
  },
  {
    id: 4,
    imageUrl: "https://qns.science/wp-content/uploads/2023/11/QNS_SNS_3-4_Eng.jpg",
    question: "What is the principle of superposition in quantum mechanics?",
    answer: "The principle that a quantum system can exist in multiple states simultaneously until measured.",
    
    options: [
      'The principle that a quantum system can exist in multiple states simultaneously until measured.',
      'The principle that the energy levels of electrons in an atom are quantized.',
      'The principle that particles are indestructible and cannot be created or destroyed.',
      'The principle that the probability of a quantum event is proportional to its frequency.',
    ]
  },
]

function App() {
  const [flashcards, setflashcards] = useState(SAMPLE_FLASHCARDS)

  return (
    <>
      <FlashcardLlist flashcards={flashcards}/>
    </>
  )
}

export default App
