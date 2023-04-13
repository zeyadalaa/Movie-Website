
import { Inter } from 'next/font/google'

import styles from '@/styles/Card.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import CircularProgressBar from './CircularProgressBar';

const genreColors = ["#03a8f5","#ff5722","#4caf50 ","#00bcd4","9c27b0 "];

export default function Card(props) {

  let [progress, setProgress] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < props.vote_average * 10) {
        setProgress(prevProgress => prevProgress + 1);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, );

  return (
    <>
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.poster}>
          <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt='movie poster'></img>
          <div className={styles.movieinfo}>
            <div className={styles.title}>
              {props.title}
            </div>
            <div className={styles.movieDescription}>
              <div className={styles.overview}>
                {props.overview}
              </div>
              <div className={styles.tags}>
                {
                  props.genre_ids.map((genre, index) => (
                    <span style={{ backgroundColor: genreColors[index % genreColors.length] }}>{genre}</span>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
          <CircularProgressBar percent={progress} />
      </div>
    </div>
    </>
  )
}