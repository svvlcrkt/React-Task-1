import './App.css';
import Expenses from './components/Expenses';

function App() {

  const expenses = [
    { 
      id:"e1", 
      title: "Car Insurance1", 
      amount: 294.67, 
      date: new Date(2021, 2 ,28) 
    },
    { 
      id:"e2", 
      title: "Car Insurance2", 
      amount: 24.67, 
      date: new Date(2021, 5 ,4) 
    },
    { 
      id:"e2", 
      title: "Car Insurance3", 
      amount: 2943.67, 
      date: new Date(2021, 3 ,1) 
    },
  ];

  return (
     <div>
       <Expenses items={expenses}/>
     </div>
  );
}

export default App;
