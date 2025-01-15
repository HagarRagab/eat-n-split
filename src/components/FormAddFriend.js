import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function FormAddFriend({ onAddFriend }) {
    const [friendName, setFriendName] = useState("");
    const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");

    const handleAddFriend = (e) => {
        e.preventDefault();
        const id = crypto.randomUUID();
        onAddFriend({
            id: id,
            name: friendName,
            image: `${imgUrl}?u=${id}`,
            balance: 0,
        });
    };

    return (
        <>
            <form className="form-add-friend" onSubmit={handleAddFriend}>
                <Input
                    value={friendName}
                    onChange={(e) => setFriendName(e.target.value)}
                    required
                >
                    👫 Friend name
                </Input>
                <Input
                    type="url"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    required
                >
                    🌄 Image URL
                </Input>
                <Button>Add</Button>
            </form>
        </>
    );
}
