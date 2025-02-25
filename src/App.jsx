import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import LoginPage from './auth/LoginPage';
import NotFound from './auth/NotFound';
import ProtectedRoute from './auth/ProtectedRoute';
import DogsAccount from './dogs/DogsAccount';
import UserDogs from './dogs/UserDogs';
import Navbar from './nav/Navbar';
import PostDetails from './posts/PostDetails';
import PostsList from './posts/PostsList';
import RegisterPage from './register/RegisterPage';

function App()
{
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="custom-container">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/posts"
              element={
                <ProtectedRoute>
                  <PostsList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/posts/:postId"
              element={
                <ProtectedRoute>
                  <PostDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <DogsAccount />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dogs/:user_id"
              element={
                <ProtectedRoute>
                  <UserDogs />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
