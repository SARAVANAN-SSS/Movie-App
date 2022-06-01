import { useState } from "react";
import Button from '@mui/material/Button';

export function Counter() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return (
        <div className="container">
            <Button variant="contained" className="btn" onClick={() => setLike(like + 1)}>👍 {like}</Button>
            <Button variant="contained" className="btn" onClick={() => setDislike(dislike + 1)}>👎 {dislike}</Button>
        </div>
    );
}
