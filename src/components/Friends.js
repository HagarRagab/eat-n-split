import Friend from "./Friend";

export default function Friends({ onSelect, selectedFriend, friendsList }) {
    return (
        <ul>
            {friendsList.map((friend) => (
                <Friend
                    key={friend.id}
                    friend={friend}
                    onSelect={onSelect}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    );
}
