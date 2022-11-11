import styles from "./MovieCard.module.css";

export const MovieCard = (props) => {
    return <div className={styles.movieCard}>{props.children}</div>
}