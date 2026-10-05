export type Expense = {
  id: number;
  name: string;
  amount: number;
};

export function addExpense(
  expenses: Expense[],
  name: string,
  amount: number,
  id = Date.now()
): Expense[] {
  const trimmedName = name.trim();
  if (!trimmedName) {
    throw new Error("Expense name is required");
  }
  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("Amount must be a positive number");
  }

  return [...expenses, { id, name: trimmedName, amount }];
}

export function deleteExpense(expenses: Expense[], id: number): Expense[] {
  return expenses.filter((expense) => expense.id !== id);
}

export function calculateTotal(expenses: Expense[]): number {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}
