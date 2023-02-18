import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTracksQuery } from '../redux/services/shazamCore';

function TopCharts() {
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const { data, error, isLoading } = useGetTracksQuery();

  if (isLoading) return <Loader title="Loading..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Top Charts</h2>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks.map((track, index) => (
          <SongCard
            key={index}
            song={track}
            index={track.key}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}

export default TopCharts;
