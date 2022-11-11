import styles from "./MovieSpecifics.module.css";

export const MovieSpecific = (props: any) => {
    const classes = `${styles.MovieSpecifics} `+ props.className;
    const description = `${styles.description} `+ props.className;
    return (
        <div className={classes}>
            <h2>
                Release Date
                <dl className={description}>
                    {props.specifics.release_date}
                </dl>
            </h2>
            <h2>
                RunTime
                <dl className={description}>
                    1hr54min
                </dl>
            </h2>
            <h2>
                Budget
                <dl className={description}>
                    $1.7M
                </dl>
            </h2>
            <h2>
                Original Language
                <dl className={description}>
                    {props.specifics.original_language}
                </dl>
            </h2>
        </div>
    )
}