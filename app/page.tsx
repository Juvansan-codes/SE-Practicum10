"use client";

import { FormEvent, useState } from "react";
import {
  addExpense,
  calculateTotal,
  deleteExpense,
  type Expense
} from "../lib/expenses";

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setExpenses((current) => addExpense(current, name, Number(amount)));
      setName("");
      setAmount("");
      setError("");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to add expense"
      );
    }
  }

  return (
    <main>
      <h1>Mini Expense Tracker</h1>
      <p className="intro">Keep track of your expenses, simply.</p>

      <section className="card">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Expense name
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="e.g. Lunch"
            />
          </label>
          <label>
            Amount
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="0.00"
            />
          </label>
          <button className="add-button" type="submit">
            Add expense
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </section>

      <section className="card">
        <h2>Expenses</h2>
        {expenses.length === 0 ? (
          <p className="empty">No expenses added yet.</p>
        ) : (
          <ul className="list">
            {expenses.map((expense) => (
              <li className="expense" key={expense.id}>
                <span>{expense.name}</span>
                <span className="amount">${expense.amount.toFixed(2)}</span>
                <button
                  className="delete-button"
                  onClick={() =>
                    setExpenses((current) =>
                      deleteExpense(current, expense.id)
                    )
                  }
                  type="button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card total">
        <span>Total</span>
        <span>${calculateTotal(expenses).toFixed(2)}</span>
      </section>
    </main>
  );
}
