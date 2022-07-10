import { useState } from 'react';
import s from './SearchForm.module.css';

export default function SearchForm() {
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = evt => {
    setInputVal(evt.target.value);
  };

  return (
    <form className={s.form}>
      <input
        className={s.input}
        type="text"
        onChange={handleInputChange}
        name="searchPhrase"
        value={inputVal}
        autoFocus
      />
      <button className={s.btn} type="submit">
        Search
      </button>
    </form>
  );
}
