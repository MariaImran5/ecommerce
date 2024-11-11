import React from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div>
      <h1>E-Commerce App</h1>
      {/* Add SignupForm, LoginForm, and ProductList as needed */}
      <SignupForm />
      <LoginForm />
      <ProductList />
    </div>
  );
};

export default App;
