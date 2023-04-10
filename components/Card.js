
import { Inter } from 'next/font/google'

import styles from '@/styles/Card.module.css'

import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Card(props) {
  let arr = ["#03a8f5","#ff5722","#4caf50 ","#00bcd4","9c27b0 "]

  return (
    <>
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
                props.genre_ids.map((genre)=>(
                  <span style={{ backgroundColor: arr[Math.floor(Math.random()*5)] }} >{genre}</span>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
