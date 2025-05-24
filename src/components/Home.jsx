const Home = ({changeShowRules,setIsPlaying}) => {
    return (
      <div className="flex flex-col items-center justify-center mx-auto my-[10vh] p-6 w-full h-[50vh]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#48D2FE] font-bold font-mono mb-8 text-center">
          <span className="text-yellow-400">Blink</span> Tac Toe
        </h1>
        
        <div className="flex gap-6">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-xl transition"
            onClick={()=>{
            setIsPlaying((prev)=>!prev)
          }}
          >
            Play
          </button>
          <button className="bg-[#48D2FE] hover:bg-[#3bbde5] text-black font-bold py-2 px-6 rounded-xl transition"
          onClick={()=>{
            changeShowRules((prev)=>!prev)
          }}
          >
            Rules
          </button>
        </div>
      </div>
    );
  };
  
  export default Home;
  