import { Circle } from 'rc-progress';
import styles from '@/styles/Card.module.css'

const CircularProgressBar = ({ percent }) => (
    <div className={styles.progressBar}>
        <Circle
        className="progressBar"
        percent={percent}
        strokeWidth="10"
        trailWidth="10"
        strokeColor="#27AE60"
        strokeLinecap="round"
        trailColor="#f5f5f5"
        />
    <div className={styles.progresstext}>
        {percent}%
    </div>
    </div>
);

export default CircularProgressBar;