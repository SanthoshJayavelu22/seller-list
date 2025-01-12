import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SearchBox from './components/SearchBox';
import SellerList from './components/SellerList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://6783105c8b6c7a1316f36933.mockapi.io/sellers'); 
        const data = await response.json();
        const mappedData = data.map((seller) => ({
          name: seller.name,
          rating: Math.random() * 5, 
          review: 'Excellent service!', 
        }));
        setSellers(mappedData);
      } catch (error) {
        console.error('Error fetching sellers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSellers();
  }, []);

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

  const filteredSellers = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="flex-grow-1">
        {!isLoggedIn ? (
          <LoginForm onLogin={handleLogin} />
        ) : loading ? (
          <div className="text-center my-5">Loading sellers...</div>
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
