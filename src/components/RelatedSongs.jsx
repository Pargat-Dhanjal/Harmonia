import SongBar from './SongBar';

function RelatedSongs({
  data,
  isPlaying,
  activeSong,
  handelPauseClick,
  handelPlayClick,
}) {
  return (
    <div className="flex flex-col">
      <h1 className="text-white text-3xl font-bold">Related Songs</h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.tracks.map((track, index) => (
          <SongBar
            key={index}
            song={track}
            i={index}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            handelPauseClick={handelPauseClick}
            handelPlayClick={handelPlayClick}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedSongs;
