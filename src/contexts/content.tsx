import { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import api from '../services/api'
import { ICharacter } from '../types/character.type'

interface IContent{
    score: number;
    errors: number;
    current: number;
    isGameStarted:boolean;
    persons: ICharacter[] | undefined
    startGame: () => void;
    handleCorrectAnswer: () => void;
    handleIncorrectAnswer: () => void;
    nextCharacter: () => void;
}

export const ContentContext = createContext({} as IContent)


export const ContextProvider = ({children}:any) => {
    const [persons,setPersons] = useState<ICharacter[]>()
    const [score,setScore] = useState(0)
    const [errors,setErrors] = useState(0)
    const [current,setCurrent] = useState(0)
    const [isGameStarted,setIsGameStarted] = useState(false)
    
    const createNumbersArray = () => {
        let arr = []
        for(let x = 0;x<10;x++){
           arr.push(Math.floor(Math.random() * 180))
        }
        return arr;
    }
    async function fetchData() {
        const randomNumbers = createNumbersArray()
        const { data } = await api.get(`/character/${randomNumbers}`)
        setPersons(data)
    }


    function handleCorrectAnswer() {
        setScore(score + 1)
        console.log(current)
    }
    function handleIncorrectAnswer() {
        setErrors(errors + 1)
    }

    function nextCharacter(){
        setCurrent(current + 1)
        if(current === 9){
            setCurrent(0)
            setIsGameStarted(false)
        }
    }
    function startGame(){
        setIsGameStarted(true)
    }

    useEffect(() => {
        fetchData()
    },[])

    return(
        <ContentContext.Provider value={{score,errors,current,handleCorrectAnswer,handleIncorrectAnswer,nextCharacter, isGameStarted,startGame,persons }}>
            {children}
        </ContentContext.Provider>
    )
}