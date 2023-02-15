import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

function PlayPause({ isPlaying, activeSong, song, handelPause, handelPlay }) {
  return (
    <div className="flex gap-4">
      {activeSong?.title === song.title && isPlaying ? (
        <FaPauseCircle
          onClick={handelPause}
          className="text-4xl text-white cursor-pointer"
        />
      ) : (
        <FaPlayCircle
          onClick={handelPlay}
          className="text-4xl text-white cursor-pointer"
        />
      )}
    </div>
  );
}

export default PlayPause;
