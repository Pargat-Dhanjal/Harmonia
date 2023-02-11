import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

function SongCard({ song, index, isPlaying, activeSong, data }) {
  const dispatch = useDispatch();
  const handelPauseClick = () => {
    dispatch(playPause(false));
  };

  const handelPlayClick = () => {
    dispatch(setActiveSong({song,data,index}));
    dispatch(playPause(true));
  };

  return (
    <div className="w-[250px] p-4 bg-white/5 rounded-lg backdrop-blur-sm shadow-lg flex flex-col justify-between animate-slideup cursor-pointer">
      <div className="w-full relative h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex 
        ${
          activeSong?.title === song.title
            ? "flex bg-black bg-opacity-70"
            : "hidden"
        }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handelPause={handelPauseClick}
            handelPlay={handelPlayClick}
          />
        </div>
        <img src={song.images?.coverart} alt="song-img" />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SongCard;
