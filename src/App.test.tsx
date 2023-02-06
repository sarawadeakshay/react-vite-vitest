import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('Should run the test', () => {
        const utils = render(<App />);
        expect(utils.getByText('Vite + React Tutorial')).toBeInTheDocument();
    });
});
