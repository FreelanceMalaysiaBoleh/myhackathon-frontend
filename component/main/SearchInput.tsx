import { useState } from 'react';

const SearchInput = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search with Keyword"
        style={styles.input}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={styles.icon}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="16" y1="16" x2="20" y2="20" />
      </svg>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #E0E0E0',
    borderRadius: '20px',
    padding: '5px 15px',
    width: "100%",
    height: "41px",
    backgroundColor: '#FFFFFF',
  },
  input: {
    border: 'none',
    outline: 'none',
    flex: 1,
    fontSize: '14px',
    color: '#333',
    backgroundColor: 'transparent',
  },
  icon: {
    marginLeft: '10px',
    color: '#B0B0B0',
  },
};

export default SearchInput;