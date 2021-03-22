import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";


function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
       <AuthContextProvider>
        <BookContextProvider>
         <Navbar/>
         <BookList/>
        <ThemeToggle/>
        </BookContextProvider>
       </AuthContextProvider>
    </ThemeContextProvider>
    </div>
  );
}

export default App;
