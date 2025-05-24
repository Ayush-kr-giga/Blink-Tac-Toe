const Rules = ({changeShowRules}) => {
    return (
      <div className="relative max-w-4xl mx-auto p-6 bg-[#43115B] text-white rounded-2xl  mt-10 min-h-[100px]">

        <div className="absolute top-4 right-4">
            <button
            className="text-white text-xl hover:text-yellow-400 transition"
            onClick={()=>{
                changeShowRules((prev)=>!prev)
              }}
            > X
            </button>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6 text-center">
            Game Rules 
        </h2>
        
  
        <div className="space-y-6 text-base sm:text-lg leading-relaxed font-light">
          
          <div>
            <h3 className="text-xl font-semibold text-[#48D2FE] mb-2">1. Board Structure</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>The game is played on a 3x3 grid like regular Tic Tac Toe.</li>
              <li>The grid starts empty and can contain a maximum of 6 active emojis (3 per player) at any given time.</li>
            </ul>
          </div>
  
          
          <div>
            <h3 className="text-xl font-semibold text-[#48D2FE] mb-2">2. Emoji Categories</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Each player selects one emoji category before the game begins.</li>
              <li>Example categories:</li>
              <ul className="list-disc pl-10">
                <li>Animals: 🐶 🐱 🐵 🐰</li>
                <li>Food: 🍕 🍟 🍔 🍩</li>
                <li>Sports: ⚽️ 🏀 🏈 🎾</li>
              </ul>
              <li>On their turn, a player is assigned a random emoji from their own category.</li>
              <li>You can create your own category of emojis.</li>
            </ul>
          </div>
  
          
          <div>
            <h3 className="text-xl font-semibold text-[#48D2FE] mb-2">3. Turn-Based Play</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Player 1 begins, followed by Player 2, alternating every turn.</li>
              <li>A player can place their emoji on any cell.</li>
            </ul>
          </div>
  
         
          <div>
            <h3 className="text-xl font-semibold text-[#48D2FE] mb-2">4. Vanishing Rule</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Each player can have only 3 emojis on the board at any time.</li>
              <li>When a player attempts to place a 4th emoji, their oldest emoji is removed automatically.</li>
              <li>The 4th emoji cannot be placed over where the 1st emoji was placed.</li>
              <li>The emoji disappears visually, and that cell becomes empty or reusable.</li>
            </ul>
          </div>
  
         
          <div>
            <h3 className="text-xl font-semibold text-[#48D2FE] mb-2">5. Winning Condition</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>A player wins by forming a line of 3 of their own emojis:</li>
              <ul className="list-disc pl-10">
                <li>Horizontally, vertically, or diagonally</li>
              </ul>
              <li>Winning emojis must all belong to the same player.</li>
            </ul>
          </div>
  
         
          <div>
            <h3 className="text-xl font-semibold text-[#48D2FE] mb-2">6. Game Ending</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>The game continues until one player wins.</li>
              <li>Draws are not possible because the board can never be fully filled.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Rules;
  