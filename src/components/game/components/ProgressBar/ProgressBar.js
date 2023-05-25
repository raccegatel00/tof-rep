import './ProgressBar.css';
import {useEffect, useState} from "react";

export default function ProgressBar(props) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (props.progress !== undefined) setProgress(props.progress)
    }, [props])

    return (
        <div className="meter">
            <span style={{width: progress + '%'}}></span>
        </div>
    )
}
