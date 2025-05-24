import { useState } from "react";


const Play = ({players,changePlayers,categories,markers,changeMarkers}) => {

    let selection=Object.keys(categories)
    // console.log(selection)

    const [player1,setPlayer1]=useState("")
    const [player2,setPlayer2]=useState("")
    const handle1=(e)=>{
        e.preventDefault();
        changeMarkers((prev)=>({
            ...prev,
            p1:categories[player1]
            
        }))
        let idx = selection.indexOf(player1)
        selection.splice(idx,1)
        console.log(selection)
        // console.log(markers)

    }

    const handle2=(e)=>{
        e.preventDefault();
        changeMarkers((prev)=>({
            ...prev,
            p2:categories[player2]
            
        }))

        console.log(markers)
    }

    return (
      <div className="flex flex-col  items-center min-h-screen bg-[#5A1E76] p-4">
        <h1 className="my-20 text-3xl text-yellow-400 your name and ">Choose Name and Marker</h1>
        { !markers.p1 && <form className="w-full max-w-md bg-[#43115B] p-8 rounded-xl shadow-lg space-y-6 flex flex-col justify-center items-center" 
        onSubmit={(e)=>{handle1(e)}}
        >  
          <input
            type="text"
            value={players.p1}
            required
            autoFocus
            className=" text-center text-2xl px-4 py-2 rounded-lg focus:outline-none  text-white font-medium"
            onChange={(e)=>{
                changePlayers(prev => ({
                    ...prev,
                    p1: e.target.value
                  }));
                console.log(players)
            }}
          />

          <select className="text-2xl text-center text-white" required 
          value={player1}
          onChange={(e)=>{
            setPlayer1(e.target.value)
            console.log(player1)
        }}
          >
            <option value="" hidden>Select Category</option>
            {selection.map((el)=>{
                return <option value={el}>{el}</option>
            })}

          </select>
  
          <button
            type="submit"
            className="w-full bg-[#5A1E76] text-white py-2 rounded-lg font-semibold hover:bg-[#712894] transition duration-300"
          >
            Next
          </button>
        </form>}

        { markers.p1 && <form className="w-full max-w-md bg-[#43115B] p-8 rounded-xl shadow-lg space-y-6 flex flex-col justify-center items-center" 
        onSubmit={(e)=>{handle2(e)}}
        >  
          <input
            type="text"
            value={players.p2}
            required
            autoFocus
            className=" text-center text-2xl px-4 py-2 rounded-lg focus:outline-none  text-white font-medium"
            onChange={(e)=>{
                changePlayers(prev => ({
                    ...prev,
                    p2: e.target.value
                  }));
                console.log(players)
            }}
          />

          <select className="text-2xl text-center text-white" required 
          value={player2}
          onChange={(e)=>{
            setPlayer2(e.target.value)
            console.log(player2)
        }}
          >
            <option value="" hidden>Select Category</option>
            {selection.map((el)=>{
                return <option value={el}>{el}</option>
            })}

          </select>
  
          <button
            type="submit"
            className="w-full  py-2 rounded-lg font-semibold bg-[#48D2FE] transition duration-300"
          >
            Start Game
          </button>
        </form>}


      </div>
    );
  };
  
  export default Play;
  