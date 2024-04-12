import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    balance: 2000,
    total_income: 6000,
    total_expenses: 4000,
    transactions: [
      {
        date: "21/04/2024",
        amount: "2500",
        party: "mr Paul",
        type: "credit",
      },
      {
        date: "21/04/2024",
        amount: "3500",
        party: "mr Patrick",
        type: "credit",
      },

      {
        date: "21/04/2024",
        amount: "250",
        party: "mr Frank",
        type: "debit",
      },
      {
        date: "21/04/2024",
        amount: "2500",
        party: "mr Peter",
        type: "debit",
      },
      {
        date: "23/04/2024",
        amount: "1000",
        type: "expenditure",
        use: "food",
      },
    ],
  },
  reducers: {
    credit: (state, action) => {
      state.balance += action.payload * 1;
      state.total_income += action.payload * 1;
    },
    debit: (state, action) => {
      state.balance -= action.payload * 1;
      state.total_expenses += action.payload * 1;
    },
    saveCredit: (state, action) => {
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    },
    saveDebit: (state, action) => {
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    },
  },
});

export const { credit, debit, saveCredit, saveDebit } = accountSlice.actions;

export default accountSlice.reducer;
