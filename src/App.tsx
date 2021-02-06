import './App.scss';
import { MainHeader } from './layout/components/main-header/main-header';
import { SearchUsers } from './layout/components/search-users/search-users';

function App() {
  return (
    <div className='main-container'>
      <MainHeader />
      <SearchUsers />
    </div>
  );
}

export default App;
