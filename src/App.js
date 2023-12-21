import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import { Team } from './components/Team/Team';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondColor: '#FDE7E8',
    },
    {
      name: 'UX / UI',
      primaryColor: '#D86EBF',
      secondColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondColor: '#FFEEDF',
    }
  
  ]

  const [employees, setEmployees] = useState([])

  return (
    <div className="App">
      <Banner />
      <Forms teams={teams.map(team => team.name)} onEmployeeCadastration={employee => setEmployees([...employees, employee])}/>
      
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondColor={team.secondColor}
        employees={employees.filter(employee => employee.team === team.name)}
      />)}

    </div>
  );
}

export default App;
