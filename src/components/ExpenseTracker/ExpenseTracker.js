import React from 'react';
import AddExpenseButton from '../AddExpenseButton/AddExpenseButton';

const ExpenseTracker = ({ expenseSources, addExpenseSource, removeExpenseSource, updateExpenseSource, totalExpenses }) => {
    return (
        <div className="expenseTracker">
            <h1 className="text-2xl font-bold mb-4">Expenses</h1>
            {expenseSources.map((source) => (
                <AddExpenseButton 
                    key={source.id} 
                    source={source} 
                    onRemove={() => {
                        removeExpenseSource(source.id);
                    }} 
                    onUpdate={(updatedSource) => {
                        updateExpenseSource(updatedSource);
                    }} 
                />
            ))}
            <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={addExpenseSource}
            >
                Add Expense Source
            </button>
        </div>
    );
};

export default ExpenseTracker;


