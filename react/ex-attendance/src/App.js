import './App.scss';
import MyContext from './MyContext';
import List from './page/List';
import Write from './page/Write';

function App() {
  return (
    <>
      <section>
        <MyContext>
          <Write
            // key={obj.id} 
            // deleteData={deleteData}
          />
          <List/>
        </MyContext>
      </section>
    </>
  );
}
export default App;
