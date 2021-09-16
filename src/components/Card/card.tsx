import { ChangeEvent } from "react";
import { ICharacter } from "../../types/character.type";

interface ICard {
    person: ICharacter
    value: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    checkAnswer: () => void;
}


const Card = ({person,value,handleChange,checkAnswer}:ICard) => {
    return(
        <div>
            <img src={person.image} alt="person"/>
            <h1>{person.name}</h1>
            <input type="text" placeholder="Adivinhe o nome do personagem" value={value} onChange={handleChange}/>
            <button onClick={checkAnswer}>Confirmar</button>
        </div>
    )
}

export default Card