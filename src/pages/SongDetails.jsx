import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from '../redux/services/shazamCore';

function SongDetails() {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: related,
    isFetching: isLoading,
    error,
  } = useGetSongRelatedQuery({ songid });
  const { data, isFetching } = useGetSongDetailsQuery({ songid });

  const handelPauseClick = () => {
    dispatch(playPause(false));
  };

  const handelPlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  if (isFetching || isLoading) return <Loader title="Loading..." />;
  if (error) return <Error />;
  return (
    <div className="relative w-full flex flex-col">
      <DetailsHeader artisitId="" songData={data} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>
        <div className="mt-5">
          {data?.sections[1].type === 'LYRICS' ? (
            data?.sections[1].text.map((text, index) => (
              <p key={index} className="text-gray-400 text-base my-1">
                {text}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">No Lyrics Found</p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={related}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handelPauseClick={handelPlayClick}
        handelPlayClick={handelPauseClick}
      />
    </div>
  );
}

export default SongDetails;
