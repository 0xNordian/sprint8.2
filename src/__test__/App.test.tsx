import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import WrapperApp from '../App';
import { store } from '../redux/store';
import { selectTotalExpenses } from '../features/counter/counterSlice';

describe('App', () => {
    it('renders the total balance', () => {
        render(
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <WrapperApp />
                </I18nextProvider>
            </Provider>
        );
        expect(screen.getByText(/app.totalBalance/i)).toBeInTheDocument();
    });

    it('renders the week latest expenses', () => {
        render(
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <WrapperApp />
                </I18nextProvider>
            </Provider>
        );
        expect(screen.getByText(/app.weekLatestExpenses/i)).toBeInTheDocument();
    });

    it('renders the count is greater than zero', () => {
        render(
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <WrapperApp />
                </I18nextProvider>
            </Provider>
        );
    
        const count = selectTotalExpenses(store.getState());
        expect(count).toBeGreaterThan(0);
    });

});