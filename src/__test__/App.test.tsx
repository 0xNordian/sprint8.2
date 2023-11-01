import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'
import WrapperApp from '../App'
import { store } from '../redux/store'

import { 
    selectTotalExpenses, 
    selectTodayExpenses, 
    deltaExpenses, 
    getRandomInt,
    getWeekBounds
} from '../features/counter/counterSlice'

describe('App', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <WrapperApp />
                </I18nextProvider>
            </Provider>,
        )
    })

    it('renders the total balance', () => {   
        expect(screen.getByText(/app.totalBalance/i)).toBeInTheDocument()
    })

    it('renders the week latest expenses', () => {
        expect(screen.getByText(/app.weekLatestExpenses/i)).toBeInTheDocument()
    })

    it('renders the count is greater than zero', () => {
        const count = selectTotalExpenses(store.getState())
        expect(count).toBeGreaterThan(0)
    })

    it('Todays total balance should be greater than zero', () => {
        const count = selectTodayExpenses(store.getState())
        expect(count).toBeGreaterThan(0)
    })

    it('today total balance should be a value between 50 and 300', () => {
        const count = selectTodayExpenses(store.getState())
        expect(count).toBeGreaterThanOrEqual(50)
        expect(count).toBeLessThanOrEqual(300)
    })

    it("deltaExpenses shouldnt be null", () => {
        const diff = deltaExpenses(store.getState())
        expect(diff).not.toBeNull()
    })

    it('creates a random number', () => {
        const random = getRandomInt(1, 100)
        expect(random).toBeGreaterThanOrEqual(1)
        expect(random).toBeLessThanOrEqual(100)
    })

    it('should have as an output a monday and a sunday date', () => {
        const weekBounds = getWeekBounds(new Date())
        console.log("weekBounds", weekBounds)
        expect(weekBounds).toHaveProperty('monday')
        expect(weekBounds).toHaveProperty('sunday')
    })
})