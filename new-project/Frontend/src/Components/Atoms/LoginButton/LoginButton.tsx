import React from 'react';
import styles from './LoginButton.module.sass';

interface LoginButtonProps {
  label: string;
  onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.loginButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default LoginButton;
