import React from 'react'
import bg1 from "../image/v.avif"
import styles from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues={
    name: "",
    email: "",
    password: "",
    confirm_password: "",
}


const Register = () => {

    const registerScheme=Yup.object({

        firstName :Yup.string().min(2, "Name contain much more than 2 character")
        .required("Please enter name"),

        email: Yup.string()
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          "Please enter valid email"
        )
        .required("Please enter email"),
      password: Yup.string()
        .trim()
        .matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
          "Password contain minimum eight characters, at least one letter and one number"
        )
        .required("Please enter password"),

      confirm_password: Yup.string()
        .trim()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please enter confirm password"),
        
    })

    const {values, errors, touched, handleBlur, handleChange, handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:registerScheme,
        onSubmit:values=>
        {
            alert(JSON.stringify(values, null, 2));
          },
    });

  



   const container ={
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:"100vh",
    display:"flex",
    alignItems: "center",
    justifyContent:" center",
  }
   


  
  return (
    <>
        <div style={container}> 
        <div className={styles.formConatiner}>

        
        <form onSubmit={handleSubmit}>
        <div className={styles.inputBlock}>
            <h1>Concept Form validate</h1>
           
        <label htmlFor='FirstName' className={styles.formLabel}>First Name </label>
        <input
         type='text'
         className={styles.formInput}
        placeholder='Enter first name'
        name='firstName'
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        /> {errors?.firstName && touched?.firstName && <span className={styles.inputError}>{errors.firstName}</span>}
        </div>


        <div className={styles.inputBlock}>
        <label htmlFor='email' className={styles.formLabel}>Email</label>
        <input
         type='email'
         className={styles.formInput}
        placeholder='Enter email'
        name='email'
        value={values?.email}
        onChange={handleChange}
        onBlur={handleBlur}
        
        />
        {errors?.email && touched?.email && <span className={styles.inputError}>{errors.email}</span>}
        </div>

        <div className={styles.inputBlock}>
        <label htmlFor='password' className={styles.formLabel}>Enter Password </label>
        <input
         type='password'
         className={styles.formInput}
        placeholder='Enter Password'
        name='password'
        value={values?.password}
        onChange={handleChange}
        onBlur={handleBlur}
        
        />
        {errors?.password && touched?.password && (
                <span className={styles.inputError}>{errors?.password}</span>
              )}
        </div>

        <div className={styles.inputBlock}>
        <label htmlFor='confirm_password' className={styles.formLabel}> Confirm Password </label>
        <input
         type='confirm_password'
         className={styles.formInput}
        placeholder='Enter Password'
        name='confirm_password'
        value={values?.confirm_password}
        onChange={handleChange}
        onBlur={handleBlur}
        
        />
         {errors?.confirm_password && touched?.confirm_password && (
                <span className={styles.inputError}>{errors?.confirm_password}</span>
              )}
        </div>

        <button type='submit' className={styles.loginBtn}>Register</button>
       
        <p className={styles.formBottom}>
              Already have account? 
              <a>Login</a>
            </p>
        </form>
        </div>
      

            </div>

       
        
        
        
        
        
      
    </>
  )
}

export default Register
