import { useContext } from 'react'
import { useState,useEffect, ChangeEvent } from 'react'
import Card from '../../components/Card/card'
import Scoreboard from '../../components/Scoreboard/Scoreboard'
import StartGame from '../../components/StartGame/StartGame'
import { ContentContext } from '../../contexts/content'
import { ICharacter } from '../../types/character.type'

const Home = () => {
    const {handleCorrectAnswer,handleIncorrectAnswer,nextCharacter,current,startGame,isGameStarted,persons} = useContext(ContentContext)

    const [currentPerson,setCurrentPerson] = useState<ICharacter>()
    const [answer,setAnswer] = useState('')                                          

   
    const handleAnswer = (event: ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value)
    }

    const checkAnswer = () => {
        answer === currentPerson?.name ? handleCorrectAnswer() :  handleIncorrectAnswer()
        nextCharacter()
        setAnswer('')
    }

    useEffect(() => {
        isGameStarted && persons && setCurrentPerson(persons[current])
    },[isGameStarted,current,persons])


    return(
        <div>
            <h1>Rick and Morty</h1>
            <StartGame handleClick={startGame} isStarted={isGameStarted}/>
            {persons &&  <Scoreboard isGameStarted={isGameStarted} persons={persons}/> }
            {currentPerson && isGameStarted &&  <Card person={currentPerson} value={answer} handleChange={handleAnswer} checkAnswer={checkAnswer}/> }
        </div>
    )
}

export default Home