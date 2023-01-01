import { fireEvent, render, screen, act } from '@testing-library/react';
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  // const temp  = jest.requireActual('react-router-dom')
  return {
    // ...temp,
    useNavigate: () => mockNavigate,
  }
})
