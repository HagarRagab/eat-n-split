import { useState } from "react";
import { INIT_FRIENDS } from "./INIT_FRIENDS.js";
import Friends from "./components/Friends.js";
import FormAddFriend from "./components/FormAddFriend.js";
import FormSplitBill from "./components/FormSplitBill.js";
import Button from "./components/Button.js";

export default function App() {
    const [friendsList, setFriendsList] = useState(INIT_FRIENDS);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    const handleToggleAddFriend = () => setShowAddFriend((show) => !show);

    const handleAddFriend = (newFriend) => {
        setFriendsList((friends) => [...friends, newFriend]);
        setShowAddFriend(false);
    };

    const handleSelectFriend = (friend) => {
        setSelectedFriend(friend);
        setShowAddFriend(false);
    };

    const handleSplitBill = (value) => {
        setFriendsList((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );
        setSelectedFriend(null);
    };

    return (
        <div className="app">
            <h1>Eat N Split</h1>
            <aside className="sidebar">
                <Friends
                    friendsList={friendsList}
                    onSelect={handleSelectFriend}
                    selectedFriend={selectedFriend}
                />
                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}
                <Button onClick={handleToggleAddFriend}>
                    {showAddFriend ? "Close" : "Add Friend"}
                </Button>
            </aside>
            {selectedFriend && (
                <FormSplitBill
                    key={selectedFriend.id}
                    friend={selectedFriend}
                    onSplitBill={handleSplitBill}
                />
            )}
        </div>
    );
}
