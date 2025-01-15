import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function FormSplitBill({ friend, onSplitBill }) {
    const [bill, setBill] = useState("");
    const [expense, setExpense] = useState("");
    const [whoPays, setWhoPays] = useState("you");

    const friendExpense = bill - expense || "";

    const handleSubmit = (e) => {
        e.preventDefault();
        const balance = whoPays === "you" ? friendExpense : -expense;
        onSplitBill(balance);
    };

    const handleUserExpense = (e) => {
        const userExpense = Number(e.target.value);
        if (userExpense <= bill) setExpense(userExpense);
        else return;
    };

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>split a bill with {friend.name}</h2>
            <Input
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                required
            >
                💰 Bill value
            </Input>

            <Input value={expense} onChange={handleUserExpense} required>
                🧍‍♀️ Your expense
            </Input>

            <Input disabled value={friendExpense}>
                👫 {friend.name}'s expense
            </Input>

            <label>🤑 Who is paying the bill</label>
            <select
                value={whoPays}
                onChange={(e) => setWhoPays(e.target.value)}
            >
                <option value="you">You</option>
                <option value="friend">{friend.name}</option>
            </select>

            <Button>split bill</Button>
        </form>
    );
}
