import React from 'react'
import { Toaster } from 'react-hot-toast'

import styles from '../styles/Username.module.css'

export default function Recovery() {

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold">Password Recovery</h4>
            <span className="py-4 text-lg w-2/3 text-center text-gray-500">
              Let's not forget the password next time!
            </span>
          </div>

          <form className="pt-20">

            <div className="textbox flex flex-col items-center gap-6"> 

              <span className='text-sm text-left text-gray-500'>
                  Enter the 6 digit OTP sent to your email address.
              </span>
                
              <input type="text" placeholder="OTP" className={styles.textbox}/>

              <button type="submit" className={styles.btn}>Continue</button>
            </div>

            <div className='text-center py-4'>
              <span className='text-gray-500'>Did not Recieve OTP? <button className='text-red-500'>Resend OTP</button></span>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}