import React from 'react';
import AddExpenseButton from '../AddExpenseButton/AddExpenseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ExpenseTracker = ({ expenseSources, addExpenseSource, removeExpenseSource, updateExpenseSource, totalExpenses }) => {
    return (
        <div className="max-w-md w-64 mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 bg-zinc-700 text-white p-2 rounded-lg text-center">Expenses</h1>
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
                <div className="flex justify-center mt-4 relative group">
                    <FontAwesomeIcon icon={faPlus} onClick={addExpenseSource} className="text-3xl text-white cursor-pointer" />
                    <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Add an expense source
                    </span>
                </div>
            </div>
    );
};

export default ExpenseTracker;


