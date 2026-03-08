import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import image1 from '../../components/images/projects/desktop-crypto.png';
import image2 from '../../components/images/projects/desktop-planet.png';
import image3 from '../../components/images/projects/desktop-vidvib.png';
import image4 from '../../components/images/projects/desktop-bookstore.png';
import image5 from '../../components/images/projects/desktop-traveller.png';
import image6 from '../../components/images/projects/desktop-math.png';
import image7 from '../../components/images/projects/desktop-todo.png';
import bookItNow from '../../components/images/projects/bookitnow-desktop.png';
import budgetBuddy from '../../components/images/projects/budget-desktop.png';
import cartpairs from '../../components/images/projects/cartpairs.png';

const url = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';

export const fetchquote = createAsyncThunk('quotes/fetchquotes', async (thunkAPI) => {
  try {
    const response = await fetch(url, {
      headers: {
        'X-Api-Key': '26cTkE83PIO43lDAytQOnA==cF1QVP0FKktXURwi',
      },
    });
    const quoteData = await response.json();
    return quoteData;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const initialState = {
  projects: [
    {
      id: 1,
      title: 'Cartpairs',
      description: 'Cartpairs is a seamless, personalized styling experience by connecting clients with expert stylists who curate outfits tailored to your unique preferences, lifestyle, and fashion goals. Whether you need a wardrobe refresh or event styling, we take the guesswork out of shopping ',
      image: cartpairs,
      url1: 'https://test.cartpairs.com/',
      url2: 'n/a',
      languages: {
        lan1: 'React',
        lan2: 'Redux',
        lan3: 'API',
      },
    },
    {
      id: 2,
      title: 'BookItNow',
      description: 'The BookItnow - is an Online Doctor Reservation web application designed to provide users with the ability to reserve, view, and manage doctors and doctor appointment reservation . The system aims to streamline the process of finding and booking doctors from various locations ',
      image: bookItNow,
      url1: 'https://bookitnow-app.onrender.com/',
      url2: 'https://github.com/cosywasswa/BookItNow-front-end',
      languages: {
        lan1: 'React',
        lan2: 'Rails',
        lan3: 'API',
      },
    },
    {
      id: 3,
      title: 'BudgetBuddy',
      description: 'BudgeBuddy is a fully functioning website that allows a user to fully manage his/her expenses by keeping track of all payments and their related categories. For each category the user can see how much is already spent. A user can add categories and payments related to one or more categories.',
      image: budgetBuddy,
      url1: 'https://budget-buddy-a5k3.onrender.com/',
      url2: 'https://github.com/cosywasswa/Budget-Buddy',
      languages: {
        lan1: 'Rails',
        lan2: 'PostgreSQL',
        lan3: 'Rspec',
      },
    },
    {
      id: 4,
      title: 'Bookstore Web App',
      description: 'The Bookstore is a React and Redux website that allows users to add a book to the list displays list of books remove a book from the list.',
      image: image4,
      url1: 'https://bookstore-app-7x8z.onrender.com/',
      url2: 'https://github.com/cosywasswa/Bookstore-React',
      languages: {
        lan1: 'React',
        lan2: 'Redux',
        lan3: 'API',
      },
    },
    {
      id: 5,
      title: 'VIDVIB Movies Dashboard',
      description: ' VidVib is a web application that displays a list of movies from an API. Users can like and add comments to a movie of their preference. Created by Cosmas and Tochi ',
      image: image3,
      url1: 'https://vidvib-3aeiihv7h-ticoniq.vercel.app/',
      url2: 'https://github.com/cosywasswa/vidvib',
      languages: {
        lan1: 'JavaScript',
        lan2: 'HTML',
        lan3: 'API',
      },
    },
    {
      id: 6,
      title: 'Save the planet international conference',
      description: ' Save the plannet conference-website is a project for a global conference on climate change and Carbon-Zero It contains two pages i.e the home page and about me page ',
      image: image2,
      url1: 'https://cosywasswa.github.io/Capstone-Project1/',
      url2: 'https://github.com/cosywasswa/Capstone-Project1',
      languages: {
        lan1: 'JavaScript',
        lan2: 'HTML',
        lan3: 'CSS',
      },
    },
  ],
  quotes: [],
  isLoading: false,
};

const projectSlice = createSlice({
  name: 'projectList',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchquote.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchquote.fulfilled, (state, action) => {
      state.isLoading = false;
      state.quotes = action.payload;
    });
  },
});

export default projectSlice.reducer;
