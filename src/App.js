import logo from './logo.svg';
import './App.css';
import AddSub from './components/AddSub';
import ViewSub from './components/ViewSub';
import SearchSub from './components/SearchSub';
import DeleteSub from './components/DeleteSub';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddSub/>}/>
      <Route path="/view" element={<ViewSub/>}/>
      <Route path="/search" element={<SearchSub/>}/>
      <Route path="/delete" element={<DeleteSub/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
