import SongBar from './SongBar';

function RelatedSongs({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) {
  return (
    <div className="flex flex-col">
      <h1 className="text-white text-3xl font-bold">Related Songs</h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.tracks ? (
          data?.tracks.map((song, index) => (
            <SongBar
              key={index}
              song={song}
              i={index}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, index)}
            />
          ))
        ) : (
          <p className="text-gray-400 text-base my-1">No Related Songs Found</p>
        )}
      </div>
    </div>
  );
}

export default RelatedSongs;
