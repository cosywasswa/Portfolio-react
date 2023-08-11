import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projectsSlice/projectSlice';

const store = configureStore({
  reducer: {
    projectList: projectReducer,
  },
});

export default store;
