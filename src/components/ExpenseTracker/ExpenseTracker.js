import React from 'react';
import AddExpenseButton from '../AddExpenseButton/AddExpenseButton';

const ExpenseTracker = ({ expenseSources, addExpenseSource, removeExpenseSource, updateExpenseSource, totalExpenses }) => {
    return (
        <div className="max-w-md w-64 mx-auto p-4">
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
                Add Expense
            </button>
        </div>
    );
};

export default ExpenseTracker;


