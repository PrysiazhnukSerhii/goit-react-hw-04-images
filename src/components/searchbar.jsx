import { useState } from 'react';

export function Searchbar({ onSubmit }) {
  const [carrentValue, setCarrentValue] = useState('');

  const onSubmitForm = e => {
    e.preventDefault();

    onSubmit(carrentValue);

    setCarrentValue('');
  };

  return (
    <header className="searchbar">
      <form className="searchForm" onSubmit={onSubmitForm}>
        <button type="submit" className="searchForm-button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="searchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setCarrentValue(e.target.value.toLowerCase())}
          value={carrentValue}
        />
      </form>
    </header>
  );
}
