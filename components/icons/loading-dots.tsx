import styles from "./loading-dots.module.css";

/**
 * LoadingDots.
 *
 * @param {any} {color="#000"}:{color:string}
 * @returns {JSX.Element}
 * @source https://github.dev/vercel/mongodb-starter/blob/main/components/icons/alert-circle.tsx
 */
const LoadingDots = ({ color = "#000" }: { color: string }): JSX.Element => {
    return (
        <span className={styles.loading}>
            <span style={{ backgroundColor: color }} />
            <span style={{ backgroundColor: color }} />
            <span style={{ backgroundColor: color }} />
        </span>
    );
};

export default LoadingDots;
