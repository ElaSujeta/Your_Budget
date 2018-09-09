// Income actions
export const INCREASE_INCOME = 'INCREASE_INCOME';
export const DECREASE_INCOME = 'DECREASE_INCOME';

// Spendings actions
export const ADD_SPENDING = 'ADD_SPENDING';
export const REMOVE_SPENDING = 'REMOVE_SPENDING';

export const increaseIncome = (amount) => ({
    type: INCREASE_INCOME,
    amount,
});

export const decreaseIncome = (amount) => ({
    type: DECREASE_INCOME,
    amount,
});


