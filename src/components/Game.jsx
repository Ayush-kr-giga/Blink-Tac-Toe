import { useEffect, useState } from "react"
import WinnerPopup from "./WinnerPopUp"

const Game = ({ players, markers })=>{

    let [board,setBoard]=useState(["","","","","","","","",""])
    let [nextPlayer,setNextPlayer]=useState(true)

    let [player1Moves,setPlayer1Moves]=useState([])
    let [player1Marks,setPlayer1Marks]=useState({})
    let [player2Marks,setPlayer2Marks]=useState({})
    let [player2Moves,setPlayer2Moves]=useState([])

    let [score,setScore]=useState({p1:0,p2:0})

    const [winner, setWinner] = useState(null);

    const resetGame = () => {
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setPlayer1Moves([]);
        setPlayer2Moves([]);
        setWinner(null);
        setNextPlayer(true);
      };
      

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];


    useEffect(()=>{

        setBoard(()=>{
            let newBoard=["","","","","","","","",""]

            for (let i of player1Moves){
                newBoard[i] =player1Marks[i];
            }
            for (let i of player2Moves){
                newBoard[i] = player2Marks[i];
            }

            return newBoard
        })


        const checkWin = (moves, playerName,p) => {
            if (moves.length < 3) return;
      
            for (let combo of winningCombos) {
              if (combo.every((i) => moves.includes(i))) {
                setWinner(playerName);
                setScore((prev)=>{
                    let newScore={...prev}
                    newScore[p]=newScore[p]+1
                    return newScore

                })
                console.log(winner)
                const audio = new Audio('/victorymale-version-230553.mp3'); 
                audio.play();
                return;
              }
            }
          };
      
          if (nextPlayer) {
            // Just played was Player 2
            checkWin(player2Moves, players.p2,"p2");
          } else {
            // Just played was Player 1
            checkWin(player1Moves, players.p1,"p1");
          }

    },[nextPlayer])


    const handleClick=(i)=>{
        if (board[i] !== "") return;

        let random = Math.floor(Math.random() * 4);

        // setBoard((prev) => {
        //     const newBoard = [...prev];
        //     newBoard[i] = nextPlayer ? markers.p1[random] : markers.p2[random];
        //     return newBoard;
        //   });

        if (nextPlayer){
            if (player1Moves.length>=3){
                setPlayer1Moves((prev)=>{
                    let temp=[...prev]
                    let removed=temp.shift()
                    temp.push(i)
                    
                        setPlayer1Marks((prev)=>{
                            let newMarks={...prev}
                            delete newMarks[removed]
                            newMarks[i]=markers.p1[random]
                            return newMarks
                        })

                    return temp
                })
            }else{
                setPlayer1Moves((prev)=>{
                    let temp=[...prev]
                    temp.push(i)

                        setPlayer1Marks((prev)=>{
                            let newMarks={...prev}
                            newMarks[i]=markers.p1[random]
                            return newMarks
                        })
                    return temp
                })
            }
        }else{
            if (player2Moves.length>=3){
                setPlayer2Moves((prev)=>{
                    let temp=[...prev]
                    let removed= temp.shift()
                    temp.push(i)
                        setPlayer2Marks((prev)=>{
                            let newMarks={...prev}
                            delete newMarks[removed]
                            newMarks[i]=markers.p2[random]
                            return newMarks
                        })
                    return temp
                })
            }else{
                setPlayer2Moves((prev)=>{
                    let temp=[...prev]
                    temp.push(i)
                        setPlayer2Marks((prev)=>{
                            let newMarks={...prev}
                            newMarks[i]=markers.p2[random]
                            return newMarks
                        })
                    return temp
                })
            }

        }
        setNextPlayer((prev)=>!prev)
    }

    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-4xl font-bold text-white mb-4">Game Started!</h2>
            <p className="text-white text-xl">{players.p1} ({markers.p1}) vs {players.p2} ({markers.p2})</p>

            <h1 className="text-4xl font-bold text-yellow-400 mt-10 mb-5"
            
            >{nextPlayer? `${players.p1}'s turn`: `${players.p2}'s turn`}</h1>
            <div className="grid grid-cols-3 gap-2 mt-8 w-full max-w-sm mx-auto ">

                {board.map((val, i) => (
                    <button
                        key={i}
                        className="bg-[#2B0040] rounded text-6xl font-bold aspect-square flex items-center justify-center"
                        onClick={()=>handleClick(i)}
                    >
                        {val}
                    </button>
                    ))}
            <p className="text-white w-[400px] text-center text-2xl mt-10">
                 {players.p1} ({score.p1}) vs {players.p2} ({score.p2})
            </p>
            </div>
            {winner && <WinnerPopup winnerName={winner} onReplay={resetGame} />}

        </div>
    )
}


export default Game