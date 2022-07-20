import { Searchbar } from './searchbar';
import { useState } from 'react';
import { ImageGallery } from './imageGallery';

export function App() {
  const [serchName, setSerchName] = useState('');

  return (
    <div className="app">
      <Searchbar onSubmit={setSerchName} />
      <ImageGallery serchName={serchName} />
    </div>
  );
}
