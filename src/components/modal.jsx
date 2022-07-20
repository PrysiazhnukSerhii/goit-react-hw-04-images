import { useState } from 'react';

export function Modal({ picture }) {
  const [modal, setModal] = useState(null);

  window.addEventListener('click', e => {
    const { classList, id } = e.target;

    if (classList.contains('overlay')) {
      setModal(null);
      return;
    }

    if (!classList.contains('imageGalleryItem-image')) {
      return;
    }

    let result = picture.filter(information => information.id === Number(id));

    setModal(result);
  });

  window.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      setModal(null);
    }
  });

  if (!modal || modal.length < 1) {
    return;
  }

  const { largeImageURL, tags } = modal[0];

  return (
    <div className="overlay">
      <div className="modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
}
