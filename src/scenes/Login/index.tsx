import React from 'react';
import './styles.css';
import UseLoginScreen from './hooks/useLoginScreen';

interface LoginScreenProps {
}

const LoginScreen = ({}: LoginScreenProps) => {
  const {
    name
  } = UseLoginScreen();


  return (
    <div className="Container">
        <p>
          {name}
        </p>
    </div>
  );
};

export default LoginScreen;
