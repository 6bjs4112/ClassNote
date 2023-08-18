import './App.scss';
import List from './component/List';
import Write from './component/Write';
import {Context} from './Context';

function App() {
  return (
    <Context>
      <Write />
      <List />
    </Context>
  );
}
export default App;
