import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'

type ExpenseState = {
    expenses: { [date: string]: number }
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const startDate = new Date()
let expenses: { [date: string]: number } = {}

for (let i = 0; i <= 41; i++) {  // Adjust the loop to start at 0 and end at 20
    // Subtract days from the startDate instead of adding
    const currentDate = new Date(startDate.getTime() - i * 24 * 60 * 60 * 1000);  
    console.log("currentDate", currentDate);
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    const dateKey = `${day}/${month}/${year}`;
    expenses[dateKey] = getRandomInt(50, 300);
}

// let expenses: { [date: string]: number } = {
//     '01/10/2023': 157,
//     '02/10/2023': 283,
//     '03/10/2023': 133,
//     '04/10/2023': 40,
//     '05/10/2023': 145,
//     '06/10/2023': 635,
//     '07/10/2023': 127,
//     '08/10/2023': 88,
//     '09/10/2023': 119,
//     '10/10/2023': 108,
//     '11/10/2023': 45,
//     '12/10/2023': 322,
//     '13/10/2023': 130,
//     '14/10/2023': 200,
//     '15/10/2023': 150,
//     '16/10/2023': 168,
//     '17/10/2023': 276,
//     '18/10/2023': 67,
//     '19/10/2023': 190,
//     '20/10/2023': 207,
//     '21/10/2023': 321,
//     '22/10/2023': 262,
//     '23/10/2023': 23,
//     '24/10/2023': 240,
//     '25/10/2023': 125,
//     '26/10/2023': 206,
//     '27/10/2023': 78,
//     '28/10/2023': 280,
//     '29/10/2023': 129,
//     '30/10/2023': 70,
//     '31/10/2023': 310,
//     '01/11/2023': 132,
//     '02/11/2023': 333,
//     '03/11/2023': 349,
//     '04/11/2023': 250,
//     '05/11/2023': 136,
// };

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
