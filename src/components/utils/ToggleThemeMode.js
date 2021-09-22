import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as MoonIcon } from '../../resources/images/icons/moon.svg';
import { ReactComponent as SunIcon } from '../../resources/images/icons/sun.svg';

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 3.0rem;
  height: 1.7rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.3rem;
  padding: 0.1rem;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 1.3rem;
    height: auto;
    transition: all 0.3s linear;
    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(50px)')};
    }
    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-50px)' : 'translateY(0)')};
    }
  }
`;

const ToggleThemeMode = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} style={{ margin: '0' }}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

ToggleThemeMode.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
};

export default ToggleThemeMode;
