import React, { useState } from 'react';
import IncomeTracker from '../IncomeTracker/IncomeTracker';
import ExpenseTracker from '../ExpenseTracker/ExpenseTracker';
import FinancialSummary from '../FinancialSummary/FinancialSummary';
import PieChartComponent from '../PieChart/PieChart'; // Import the PieChartComponent
import { v4 as uuidv4 } from 'uuid';

const FinanceManager = () => {
    const [incomeSources, setIncomeSources] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [expenseSources, setExpenseSources] = useState([]);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [showExpenses, setShowExpenses] = useState(true); // State to toggle between expenses and income

    // -------- Incomes -----------
    const addIncomeSource = () => {
        const newId = uuidv4();
        const newIncomeSources = [...incomeSources, { id: newId, title: '', amount: 0 }];
        setIncomeSources(newIncomeSources);
        updateTotalIncome(newIncomeSources);
    };

    const removeIncomeSource = (idToRemove) => {
        const updatedIncomeSources = incomeSources.filter(source => source.id !== idToRemove);
        setIncomeSources(updatedIncomeSources);
        updateTotalIncome(updatedIncomeSources);
    };

    const updateIncomeSource = (updatedSource) => {
        const updatedIncomeSources = incomeSources.map(source =>
            source.id === updatedSource.id ? updatedSource : source
        );
        setIncomeSources(updatedIncomeSources);
        updateTotalIncome(updatedIncomeSources);
    };

    const updateTotalIncome = (updateIncomeSource) => {
        const total = updateIncomeSource.reduce((acc, source) => acc + parseFloat(source.amount), 0);
        setTotalIncome(total);
    };

    // ---------- Expenses ------------
    const addExpenseSource = () => {
        const newId = uuidv4();
        const newExpenseSources = [...expenseSources, { id: newId, title: '', amount: 0 }];
        setExpenseSources(newExpenseSources);
        updateTotalExpenses(newExpenseSources);
    };

    const removeExpenseSource = (idToRemove) => {
        const updatedExpenseSources = expenseSources.filter(source => source.id !== idToRemove);
        setExpenseSources(updatedExpenseSources);
        updateTotalExpenses(updatedExpenseSources);
    };

    const updateExpenseSource = (updatedSource) => {
        const updatedExpenseSources = expenseSources.map(source =>
            source.id === updatedSource.id ? updatedSource : source
        );
        setExpenseSources(updatedExpenseSources);
        updateTotalExpenses(updatedExpenseSources);
    };

    const updateTotalExpenses = (updatedExpenseSources) => {
        const total = updatedExpenseSources.reduce((acc, source) => acc + parseFloat(source.amount), 0);
        setTotalExpenses(total);
    };

    //-------- Pie Chart -----------

    const pieChartColors = showExpenses ? 
        ['#9b2948', '#ff7251', '#ffedbf', '#91472d', '#e44040', '#ffcd74', '#fe2d2d'] : //expense colors
        ['#aad688', '#dde8ee', '#47894b', '#9defae', '#8cabc2', '#495f41', '#f2da82'];    //income colors

    // Transform data for PieChartComponent
    const pieChartData = showExpenses
        ? expenseSources.map(source => ({
              id: source.id,
              value: parseFloat(source.amount),
              label: source.title || 'Untitled Expense'
          }))
        : incomeSources.map(source => ({
              id: source.id,
              value: parseFloat(source.amount),
              label: source.title || 'Untitled Income'
          }));

    return (
        <div className="flex p-4">
            <div className="w-1/2 flex pr-2 space-x-2">
                <div className="w-1/2 h-screen overflow-y-auto">
                    <IncomeTracker 
                        incomeSources={incomeSources} 
                        addIncomeSource={addIncomeSource} 
                        removeIncomeSource={removeIncomeSource} 
                        updateIncomeSource={updateIncomeSource}
                        totalIncome={totalIncome}
                    />
                </div>
                <div className="w-1/2 h-screen overflow-y-auto">
                    <ExpenseTracker 
                        expenseSources={expenseSources} 
                        addExpenseSource={addExpenseSource} 
                        removeExpenseSource={removeExpenseSource}
                        updateExpenseSource={updateExpenseSource}
                        totalExpenses={totalExpenses} 
                    />
                </div>
            </div>
            <div className="w-1/2 flex flex-col pl-2">
                <div className="mb-4">
                    <FinancialSummary totalIncome={totalIncome} totalExpenses={totalExpenses} />
                </div>
                <div>
                    <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
                        onClick={() => setShowExpenses(!showExpenses)}
                    >
                        {showExpenses ? 'Show Income Pie Chart' : 'Show Expenses Pie Chart'}
                    </button>
                    <PieChartComponent
                        colors={pieChartColors}
                        data={pieChartData} 
                    />
                </div>
            </div>
        </div>
    );
};

export default FinanceManager;
