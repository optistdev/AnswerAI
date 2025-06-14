import "./App.css";

import Loading from './components/loading';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Loading />
      <div>Hello World!</div>
    </AuthProvider>
  );
}

export default App;

