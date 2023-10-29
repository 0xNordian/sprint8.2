import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'

type ExpenseState = {
    expenses: { [date: string]: number }
}

// function getRandomInt(min: number, max: number) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// const startDate = new Date('2023-10-26')
// let expenses: { [date: string]: number } = {}

let expenses: { [date: string]: number } = {
    '01/10/2023': 1,
    '02/10/2023': 2,
    '03/10/2023': 3,
    '04/10/2023': 4,
    '05/10/2023': 5,
    '06/10/2023': 6,
    '07/10/2023': 7,
    '08/10/2023': 8,
    '09/10/2023': 9,
    '10/10/2023': 10,
    '11/10/2023': 11,
    '12/10/2023': 12,
    '13/10/2023': 13,
    '14/10/2023': 14,
    '15/10/2023': 15,
    '16/10/2023': 16,
    '17/10/2023': 17,
    '18/10/2023': 18,
    '19/10/2023': 19,
    '20/10/2023': 20,
    '21/10/2023': 21,
    '22/10/2023': 22,
    '23/10/2023': 23,
    '24/10/2023': 24,
    '25/10/2023': 25,
    '26/10/2023': 26,
    '27/10/2023': 27,
    '28/10/2023': 28,
    '29/10/2023': 29,
    '30/10/2023': 30,
    '31/10/2023': 31,
    '01/11/2023': 32,
    '02/11/2023': 33,
    '03/11/2023': 34,
    '04/11/2023': 35,
    '05/11/2023': 36,
};

// for (let i = 0; i < 21; i++) {
//     const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000)
//     const day = currentDate.getDate().toString().padStart(2, '0')
//     const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
//     const year = currentDate.getFullYear()
//     const dateKey = `${day}/${month}/${year}`
//     expenses[dateKey] = getRandomInt(10, 300)
// }


console.log(expenses)

export const getWeekBounds = (d?: Date) => {
    const newDate = new Date(d);
    let day = newDate.getDay();
    
    // Calculate Monday
    let diffToMonday = newDate.getDate() - day + (day == 0 ? -6 : 1); 
    let monday = new Date(newDate.setDate(diffToMonday));

    // Calculate Sunday
    let diffToSunday = diffToMonday + 6;
    let sunday = new Date(newDate.setDate(diffToSunday));
    // console.log(monday, sunday)
    
    return { monday, sunday };
}

const initialState: ExpenseState = {
    expenses: {
        ...expenses,
    },
}

export const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (
            state,
            action: PayloadAction<{ date: string; amount: number }>,
        ) => {
            state.expenses[action.payload.date] = action.payload.amount
        },
        updateExpense: (
            state,
            action: PayloadAction<{ date: string; amount: number }>,
        ) => {
            if (state.expenses[action.payload.date]) {
                state.expenses[action.payload.date] = action.payload.amount
            }
        },
        removeExpense: (state, action: PayloadAction<string>) => {
            delete state.expenses[action.payload]
        },
    },
})

export const { addExpense, updateExpense, removeExpense } = expenseSlice.actions

export const selectExpenses = (state: RootState) => state.expenses.expenses

export const selectTotalExpenses = (state: RootState) => {
    return Object.values(state.expenses.expenses).reduce(
        (sum, amount) => sum + amount,
        0,
    )
}

export const selectTodayExpenses = (state: RootState) => {
    const today = new Date().toLocaleDateString('en-GB')
    return state.expenses.expenses[today] || 0
}

export const deltaExpenses = (state: RootState) => {
    const today = selectTodayExpenses(state)
    const yesterday = new Date(
        new Date().getTime() - 24 * 60 * 60 * 1000,
    ).toLocaleDateString('en-GB')
    return (
        (today / (state.expenses.expenses[yesterday] || 0) - 1) *
        100
    ).toFixed(2)
}

export default expenseSlice.reducer
