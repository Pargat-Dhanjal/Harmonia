import { useParams } from 'react-router-dom';
import { DetailsHeader, Error, Loader } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

function ArtistDetails() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetArtistDetailsQuery({ id });
  if (isFetching) return <Loader title="Loading..." />;
  if (error) return <Error />;
  return (
    <div className="relative w-full flex flex-col">
      <DetailsHeader artistId={id} artistData={data.data[0]} />
      <h1 className="text-white text-2xl">Comming Soon</h1>
    </div>
  );
}

export default ArtistDetails;
