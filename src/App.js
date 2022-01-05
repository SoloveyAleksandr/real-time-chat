import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '.';
import './App.css';
import AppRouter from './AppRouter';
import Header from './components/Header/Header';
import Spiner from './components/Spiner/Spiner';

function App() {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Spiner />
  }

  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
