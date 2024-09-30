import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch search results
export const fetchSearchResults = createAsyncThunk(
  'search/fetchSearchResults',
  async (query) => {
    const response = await axios.get(`http://localhost:3005/api/movie?title=${query}`);
    // console.log("response", response.data);
    
    return response.data;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    results: [],
    searchHistory: [],
    status: 'pending',
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    addToHistory: (state, action) => {
        // console.log("state addToHistory", state);
        // console.log("action addToHistory", action);
        
      const timestamp = new Date().toLocaleString();
      state.searchHistory.push({ ...action.payload, timestamp });
    },
    removeFromHistory: (state, action) => {
        // console.log(state, "hello world", action);
        state.searchHistory = state.searchHistory.filter((item) => {
          // console.log(item, "indsidethe filter function >>>>>>>>>>", item.id !== action.payload);
          return item.id !== action.payload;
        });
        // console.log("state.searchHistory", state.searchHistory);
        
    },
    clearHistory: (state) => {
      state.searchHistory = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setQuery, addToHistory, removeFromHistory, clearHistory } = searchSlice.actions;
export default searchSlice.reducer;
