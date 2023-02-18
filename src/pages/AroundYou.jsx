import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetCountryQuery } from '../redux/services/shazamCore';
import { useGetIpQuery } from '../redux/services/geoIp';

function AroundYou() {
  const [loading, setLoading] = useState(true);
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const { data: ip } = useGetIpQuery();
  const [country, setCountry] = useState('ip-country-chart-IN');
  const { data, error, isLoading } = useGetCountryQuery(country);

  useEffect(() => {
    if (ip?.country_code) setCountry('ip-country-chart-'.concat(ip?.country_code));
    setLoading(false);
  }, [ip]);

  if (isLoading || loading) return <Loader title="Loading..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Around You</h2>
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

export default AroundYou;
