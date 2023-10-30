// import { render, screen } from '@testing-library/react'
// import App from '../App'

// test('Renders main page correctly', async () => {
//     render(<App />)
//     const buttonCount = await screen.findByRole('button')
//     expect(buttonCount.innerHTML).toBe('count is 0')
//     expect(true).toBeTruthy()
// })

// import { render, screen } from '@testing-library/react'
// import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from '../features/counter/counterSlice' // import your slice here
// import App from '../App'

// jest.mock('react-i18next', () => ({
//     useTranslation: () => ({ t: (key: string) => key }),
// }))

// type CounterState = {
//     totalExpenses: number
//     todayExpenses: number
//     deltaExpenses: number
//     expenses: Record<string, number>
// }

// const initialState: CounterState = {
//     totalExpenses: 0,
//     todayExpenses: 0,
//     deltaExpenses: 0,
//     expenses: {},
// }

// const mockState: CounterState = {
//     totalExpenses: 100,
//     todayExpenses: 20,
//     deltaExpenses: 5,
//     expenses: { '2021-10-01': 20, '2021-10-02': 30 },
// }

// const mockStore = configureStore({
//     reducer: { counter: counterSlice },
//     preloadedState: {
//         counter: mockState,
//     },
// })

// describe('<App />', () => {
//     test('Renders main page correctly', async () => {
//         render(
//             <Provider store={mockStore}>
//                 <App />
//             </Provider>,
//         )
//         const buttonCount = await screen.findByRole('button')
//         expect(buttonCount.innerHTML).toBe('count is 0')
//     })
// })

// import { render, screen } from '@testing-library/react'
// import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from '../features/counter/counterSlice' // Import your slice here
// import WrapperApp from '../App' // Import your App component here

// const mockState = {
//     totalExpenses: 0,
//     todayExpenses: 0,
//     deltaExpenses: 0,
//     expenses: {},
// }

// const mockStore = configureStore({
//     reducer: { counter: counterSlice },
//     preloadedState: {
//         counter: mockState,
//     },
// })

// describe('<App />', () => {
//     test('Button "Count is 0" is rendered', () => {
//         render(
//             <Provider store={mockStore}>
//                 <WrapperApp />
//             </Provider>,
//         )
//         const buttonElement = screen.getByText('Count is 0')
//         expect(buttonElement.textContent).toBe('Count is 0')

//     })

//     // Add additional tests to check for button interactions
//     // Example: fireEvent.click(buttonElement)
// })

import { render } from '@testing-library/react';
import App from '../App';

test('renders the App component', () => {
  render(<App />);
});
