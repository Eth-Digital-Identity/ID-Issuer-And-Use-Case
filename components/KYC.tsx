import React from 'react'
import styles from './KYC.module.css'


export function KYC () {
        return (
            <>
<div className={styles.container_div}>
  <form>
    <label>First Name</label>
    <input className={styles.input} type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label>Last Name</label>
    <input className={styles.input} type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label>Address</label>
    <input className={styles.input} type="text" id="Address" name="Address" placeholder="Your Address.."/>

    <label>Social Security Number (SSN)</label>
    <input className={styles.input} type="text" id="SSN" name="SSN" placeholder="Your SSN.."/>

    <label>Monthly Income</label>
    <input className={styles.input} type="text" id="MonthlyIncome" name="MonthlyIncome" placeholder="Your Monthly Income.."/>
  
   

  </form>
</div>
  </>
        )
    }
