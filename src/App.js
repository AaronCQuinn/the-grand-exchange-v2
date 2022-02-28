import Homepage from './pages/Homepage';
import Item from './pages/Item';
import Error from './pages/Error'
import About from './pages/About'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Context provider.
import {ItemProvider} from './context/ItemContext'

function App() {
  return (
    <ItemProvider>
      <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/item/:id' element={<Item />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </ItemProvider>
  );
}

export default App;