import styles from "./MovieDetail.module.css";
import * as React from 'react';
import { MovieSpecific } from "./MovieSpecifics";

export const MovieDetail = (props: any) => {
    
    return (
        <div>
            <h1 className={styles.title}>
                Movie Title
                <dl className={styles.description}>
                {props.details.title}
                </dl>
            </h1>
            <h2 className={styles.overview}>
                Overview
                <dl className={styles.description}>
                    {props.details.overview}
               </dl>
            </h2>
            <MovieSpecific specifics={props.details}></MovieSpecific>
        </div>
    )
}