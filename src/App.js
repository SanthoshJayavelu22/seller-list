import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SearchBox from './components/SearchBox';
import SellerList from './components/SellerList';
import 'bootstrap/dist/css/bootstrap.min.css';

const sellersData = [
  { name: 'Santhosh', rating: 4.5, review: 'Excellent service!' },
  { name: 'Sam', rating: 4.0, review: 'Good products.' },
  { name: 'Ram', rating: 5.0, review: 'Very reliable!' },
  { name: 'Suresh', rating: 4.5, review: 'Excellent service!' },
  { name: 'Sathish', rating: 4.0, review: 'Good products.' },
  { name: 'Ramesh', rating: 5.0, review: 'Very reliable!' },
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sellers, setSellers] = useState(sellersData);

  const handleLogin = (credentials) => {
    if (credentials.username && credentials.password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredSellers = sellers.filter(seller =>
    seller.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="flex-grow-1">
        {!isLoggedIn ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <>
            <SearchBox onSearch={handleSearch} />
            <SellerList sellers={filteredSellers} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
