import React from 'react';
import styles from './App.module.scss'
import { Outlet } from 'react-router-dom';
import Header from '../../widgets/Header';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
