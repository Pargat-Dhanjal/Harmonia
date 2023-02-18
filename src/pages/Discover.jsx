import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetCountryQuery } from '../redux/services/shazamCore';
import { selectGenreListId } from '../redux/features/playerSlice';

function Discover() {
  const dispatch = useDispatch();
  const { isPlaying, activeSong, genreListId } = useSelector(
    (state) => state.player
  );
  const i = genres.findIndex((genre) => genre.value === genreListId) + 1;
  const { data, error, isLoading } = useGetCountryQuery(
    'genre-country-chart-US-'.concat(i)
  );
  const title = genres.find((genre) => genre.value === genreListId);

  if (isLoading) return <Loader title="Loading..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white/90 text-left">Discover {title.title}</h2>
        <select
          onChange={(e) => {
            dispatch(selectGenreListId(e.target.value));
          }}
          value={genreListId}
          className="bg-[#000000] text-gray-300 p-4 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 animate-slowfade">
        {data?.tracks?.map((track, index) => (
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

export default Discover;
