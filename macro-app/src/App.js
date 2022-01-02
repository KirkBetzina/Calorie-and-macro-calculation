import BmrCalculator from './components/BmrCalculator';
import CreateAccountForm from './components/CreateAccountForm';
import './App.css';
import SplashPage from './pages/SplashPage';

function App() {
  const getLogin = (username, password) => {
    fetch(url + '/wallets/login/' + username + '/' + password)
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
      console.log('HEY OVER HERE IM CONSOLE LOGGIN DATA', data)
      if (data.status === 200)
      
      {
        setUser(data.data.wallet._id)
        props.history.push('/home')
      } else if (data.status === 409) {
        alert('username does not exist')
        props.history.push('/create')
      } else if (data.status === 403) {
        alert('username or password is WRONG!')
      }
      

    })
  }
  
  return (
    <div className="App">
      <SplashPage />
    </div>
  );
}

export default App;
