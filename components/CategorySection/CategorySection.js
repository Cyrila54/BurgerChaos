import React from 'react'
import styles from './CategorySection.module.css'

export default function CategorySection() {
  return (
    <div className={styles.categorySection_container}>
        <div className={styles.container}>
            <div className={styles.meals}>Menus</div>
            <div className={styles.burgers}>Burgers</div>
            <div className={styles.specialities}>Spécialités</div>
            <div className={styles.desserts}>Desserts</div>
            <div className={styles.drinks}>Boissons & Café</div>
        </div>
    </div>
  )
}
