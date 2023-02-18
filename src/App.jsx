import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer } from './components';
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[#121212]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse w-full">
          <div className="flex-1 h-fit pb-60">
            <Routes>
              <Route path="/home" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
              <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="fixed h-28 bottom-0 left-0 right-0 flex animate-slideup bg-[#181818] z-10 border-solid border-white/20 border">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
