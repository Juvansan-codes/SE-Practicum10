import { describe, expect, it } from "vitest";
import {
  addExpense,
  calculateTotal,
  deleteExpense,
  type Expense
} from "./expenses";

describe("expense tracker", () => {
  it("adds an expense", () => {
    expect(addExpense([], "Lunch", 12.5, 1)).toEqual([
      { id: 1, name: "Lunch", amount: 12.5 }
    ]);
  });

  it("deletes an expense", () => {
    const expenses: Expense[] = [
      { id: 1, name: "Lunch", amount: 12.5 },
      { id: 2, name: "Bus", amount: 3 }
    ];
    expect(deleteExpense(expenses, 1)).toEqual([
      { id: 2, name: "Bus", amount: 3 }
    ]);
  });

  it("calculates the total", () => {
    expect(
      calculateTotal([
        { id: 1, name: "Lunch", amount: 12.5 },
        { id: 2, name: "Bus", amount: 3 }
      ])
    ).toBe(15.5);
  });

  it("rejects an empty expense name", () => {
    expect(() => addExpense([], "  ", 10)).toThrow(
      "Expense name is required"
    );
  });

  it("rejects an invalid or negative amount", () => {
    expect(() => addExpense([], "Lunch", 0)).toThrow(
      "Amount must be a positive number"
    );
    expect(() => addExpense([], "Lunch", -2)).toThrow(
      "Amount must be a positive number"
    );
  });
});
