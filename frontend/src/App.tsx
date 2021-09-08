import NavBar from 'components';
import DataTable from 'components/Data Table';
import Footer from 'components/Footer';
import React from 'react';

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
        <h1 className="text-primary">Olá Mundo</h1>
        <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
