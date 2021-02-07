import './App.scss';
import { MainHeader } from './layout/main-header/main-header';
import { SearchUsers } from './layout/search-users';

function App() {
  return (
    <div className='main-container'>
      <MainHeader />
      <SearchUsers />
    </div>
  );
}

export default App;
