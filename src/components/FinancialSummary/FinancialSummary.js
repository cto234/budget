import React from 'react';

const FinancialSummary = ({ totalIncome, totalExpenses }) => {
    const netIncome = totalIncome - totalExpenses;

    return (
        <div className="p-4 bg-zinc-700 rounded-lg shadow-md">
            <h2 className="text-xl text-white font-bold mb-4">Financial Summary</h2>
            <div className="text-sky-500 mb-2">Total Income: {isNaN(totalIncome) ? '$0.00' : totalIncome.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</div>
            <p className="text-red-500 mb-2">Total Expenses: {isNaN(totalExpenses) ? '0.00' : totalExpenses.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            <p className={`font-semibold ${netIncome >= 0 ? 'text-green-500' : 'text-red-500'}`}>Net Income: {isNaN(netIncome) ? '0.00' : netIncome.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        </div>
    );
};

export default FinancialSummary;

