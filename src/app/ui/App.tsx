import React from 'react';
import styles from './App.module.scss'
import HomePage from '../../pages/HomePage';
import RegisterPage from '../../pages/RegisterPage';
import Header from '../../widgets/Header/ui';

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <main>
        <RegisterPage/>
      </main>
    </div>
  );
}

export default App;
