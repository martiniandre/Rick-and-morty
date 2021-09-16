interface IStartGame{
    isStarted: Boolean
    handleClick: () => void
}


const StartGame = ({handleClick,isStarted}:IStartGame) => {
    return(
        <>
        {!isStarted && (
             <div>
             <button onClick={handleClick}>Start</button>
             </div>
        )}
        </>
    )
}

export default StartGame