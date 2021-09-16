import { useParams } from 'react-router-dom'

interface IParams{
    id: string
}



const Person = () => {
    const { id }: IParams = useParams()
    
    return (
        <h1>Person {id}</h1>
    )
}

export default Person