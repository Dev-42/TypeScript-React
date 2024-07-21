import './App.css';
import Greet from './components/Greet';
import Person from './components/Person'
import PersonList from './components/PersonLists';

function App() {
  const personName = {
    frist: "Dev",
    last: "Bhattacharya"
  }
  const nameList = [
    {
      frist : "Bruce",
      last : "Lever"
    },
    {
      frist : "Dev",
      last : "Bhattacharya"
    },
    {
      frist : "Princess",
      last : "Deva"
    },
    {
      frist : "Alaska",
      last : "Jain"
    }
  ]
  return (
    <div className="App">
      <Greet name="Dev" age={10} isLogged ={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;