import { useContext } from "react"
import { ContentContext } from "../../contexts/content"
import { ICharacter } from "../../types/character.type"

interface IScoreboard{
    isGameStarted:Boolean
    persons: ICharacter[]
}

const Scoreboard = ({isGameStarted,persons}:IScoreboard) => {
    const {current,score,errors} = useContext(ContentContext)

    return (
        <>
        {isGameStarted && (
            <div>
                <span>score: {score}</span>
                <span>errors : {errors}</span>
                <span>current: {current}/{persons.length}</span>
            </div>
        )}
        </>
    )
}

export default Scoreboard