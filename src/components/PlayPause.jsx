import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

function PlayPause({ isPlaying, activeSong, song, handelPause, handelPlay }) {
  return (
    <div className="flex gap-4">
      {activeSong?.title === song.title && isPlaying ? (
        <FaPauseCircle
          onClick={handelPause}
          className="text-4xl text-red-600 cursor-pointer hover:text-red-400"
        />
      ) : (
        <FaPlayCircle
          onClick={handelPlay}
          className="text-4xl  text-red-600 cursor-pointer hover:text-red-400"
        />
      )}
    </div>
  );
}

export default PlayPause;
