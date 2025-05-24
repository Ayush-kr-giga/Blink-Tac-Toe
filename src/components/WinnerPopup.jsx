import React from 'react';

const WinnerPopUp = ({ winnerName, onReplay }) => {
  return (
    <div className="fixed inset-0  flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-4 text-green-600">{winnerName} Wins!</h2>
        <button
          onClick={onReplay}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
        >
          Replay
        </button>
      </div>
    </div>
  );
};

export default WinnerPopUp;
