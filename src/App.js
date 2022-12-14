import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import data from './assesnts/data'
import { useState} from 'react';


const App = () => {
  const [page, setPage] = useState(1)
  const userPerPage = 5; // her saayfada 5 adet resim olsun

  const indexoffLastUser = page * userPerPage;
  const ─░ndexOffFirstUser = indexoffLastUser - userPerPage;

  const currentUsers = data.slice(─░ndexOffFirstUser, indexoffLastUser)

  return (
    <div className='App'>
       <Header from={─░ndexOffFirstUser + 1} to={─░ndexOffFirstUser + currentUsers.length}/>
       {currentUsers.map((item) => <Main key={item.id}{...item}/>)}
       <Button total = {Math.ceil(data.length / userPerPage)} page = {page} setPage = {setPage} />

    </div>
   
  )
}

export default App;
