import './App.scss';
import List from './page/List';
import Write from './page/Write';
// import { DataContext } from './MyContext';
import MyContext from './MyContext';

function App() {

  return (
    <>
      {/* <DataContext.Provider value='1000'>
        <List />
        <Write />
      </DataContext.Provider> */}
      <MyContext>
        <List />
        <Write />
      </MyContext>
    </>
  );
}

export default App;
