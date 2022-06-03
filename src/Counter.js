import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return (
        <div className="container">
            <Badge color="primary" badgeContent={like}>
            <IconButton color="primary" className="btn" onClick={() => setLike(like + 1)}>👍</IconButton>
            </Badge>
            <Badge color="error" badgeContent={dislike}>
            <IconButton color="error"className="btn" onClick={() => setDislike(dislike + 1)}>👎</IconButton>
            </Badge>
        </div>
    );
}
