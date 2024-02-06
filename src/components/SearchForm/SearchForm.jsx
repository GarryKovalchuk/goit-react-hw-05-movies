import { useState } from 'react';
import css from './SearhForm.module.css';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div className={css.FormDiv}>
      <form className={css.Form} onSubmit={handleSubmit}>
        <input
          className={css.Input}
          type="text"
          value={query}
          onChange={onChange}
        />
        <button className={css.MovButton} type="submit">
          search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
