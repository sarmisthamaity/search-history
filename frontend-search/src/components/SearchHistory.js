import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromHistory, clearHistory } from '../reduxStore/searchSlice';

const SearchHistory = () => {
  const dispatch = useDispatch();
  const searchHistory = useSelector((state) => state.search.searchHistory);
  // console.log("searchHistory", searchHistory);


  const handleDelete = (id) => {
    dispatch(removeFromHistory(id));
  };

  const handleClearAll = () => {
    dispatch(clearHistory());
  };

  return (
    <div>
      <h3>Search History</h3>
      <table className="table-position">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>Title</th>
            <th>
              {searchHistory.length > 0 && (
                <button onClick={handleClearAll}>Clear All</button>
              )}
            </th>
          </tr>
        </thead>
        <tbody>

          {
            (Array.isArray(searchHistory) && searchHistory.length > 0 ? (
              searchHistory.map((item, indx) => {
                // console.log("item in search history delete file inside ", item);

                return (
                  <tr key={indx}>
                    <td>{item.title} - {item.timestamp}
                      <button onClick={() => handleDelete(item._id)} style={{ marginLeft: "6rem" }}>Delete</button>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>No search history available.</tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default SearchHistory;
