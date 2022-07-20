import { TailSpin } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import { ImageGalleryItem } from './imageGalleryItem';
import { ButtonMore } from './button';
import { Modal } from './modal';
import { getImages } from '../services';

export function ImageGallery({ serchName }) {
  const [arrayPictures, setArrayPictures] = useState(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!serchName) {
      return;
    }

    setStatus('pending');

    getImages(serchName, 1)
      .then(({ total, hits }) => {
        if (total < 1) {
          return Promise.reject(new Error(`Can't find: "${serchName}"`));
        }

        setArrayPictures(hits);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [serchName]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    getImages(serchName, page).then(({ hits }) => {
      setArrayPictures(prevState => [...prevState, hits]);
    });
  }, [page, serchName]);

  if (status === 'pending') {
    return <TailSpin />;
  }

  if (status === 'rejected') {
    return <h2>{error.message}</h2>;
  }

  if (status === 'resolved') {
    return (
      <>
        <ul className="imageGallery">
          <ImageGalleryItem arrayPictures={arrayPictures} />
        </ul>
        <ButtonMore onClick={setPage} page={page} />
        <Modal picture={arrayPictures} />
      </>
    );
  }
}
