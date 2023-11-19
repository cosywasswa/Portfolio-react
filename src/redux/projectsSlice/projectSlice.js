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
      id: 2,
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
      id: 3,
      title: 'Crypto-360',
      description: 'Crypto360 is a web application to display Crypto currencies from the coin cap API user can search for a crypto by name/symbol and the search results will be displayed on top of the list ',
      image: image1,
      url1: 'https://crypto360.onrender.com',
      url2: 'https://github.com/cosywasswa/Crypto360',
      languages: {
        lan1: 'React',
        lan2: 'Redux',
        lan3: 'API',
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
      title: 'Space travellers hub',
      description: ' Space-travelers-hub is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. Created by Cosmas and Munish.',
      image: image5,
      url1: 'https://space-travelers-react.onrender.com/',
      url2: 'https://github.com/cosywasswa/space-travelers-hub',
      languages: {
        lan1: 'React',
        lan2: 'Redux',
        lan3: 'API',
      },
    },
    {
      id: 6,
      title: 'Math Magicians Application',
      description: ' "Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
      image: image6,
      url1: 'https://math-magician-react-tvvm.onrender.com/',
      url2: 'https://github.com/cosywasswa/Math-magicians',
      languages: {
        lan1: 'React',
        lan2: 'CSS',
        lan3: 'API',
      },
    },
    {
      id: 7,
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
      id: 8,
      title: 'ToDo-List Application',
      description: 'To-Do-List is an application for adding new To-Do-List tasks by use of array of objects. When a user inputs a task items using the input field, it is added to the existing list. The user also can removes a task by use of a delete icon and can also updated the task description',
      image: image7,
      url1: 'https://cosywasswa.github.io/To-Do-List/dist/',
      url2: 'https://github.com/cosywasswa/To-Do-List',
      languages: {
        lan1: 'JavaScript',
        lan2: 'CSS',
        lan3: 'HTML',
      },
    },
    {
      id: 9,
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
