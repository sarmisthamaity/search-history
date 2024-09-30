import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, fetchSearchResults, addToHistory } from '../reduxStore/searchSlice';
import SearchHistory from './SearchHistory';

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);

  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (debouncedQuery) {
        dispatch(fetchSearchResults(debouncedQuery));
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedQuery, dispatch]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(setQuery(value));
    setDebouncedQuery(value);
  };


  const handleResultClick = (result) => {
    // console.log("result", result);

    dispatch(addToHistory(result));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />

      <table className="table-position">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>Title</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(results.data) && results.data.length > 0 && (
            results.data.map((item) => (
              <tr key={item._id}>
                <td onClick={() => handleResultClick(item)}>
                  {item.title}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <SearchHistory />
    </div>
  );
};

export default Search;
