'use client'
import React, { useRef, useState } from "react";
import classes from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const ContactForm = () => {
  const form = useRef();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

    const [open, setopen] = useState(false);

    const closeHandler = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }
        setopen(false);
    }

  const submitHandler = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_upgew5a",
        "template_nhmsn9n",
        form.current,
        "nu__LND6OGArzCAXA"
      )
      .then(
        (result) => {
            setopen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");


  };

  return (
    <>
      <form ref={form} onSubmit={submitHandler} className={classes.form}>
        <div className={`${classes.input} ${classes.name}`}>
          <label htmlFor="name">Full Name</label>
          <input
            required
            id="name"
            name="user_name"
            value={Name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={`${classes.input} ${classes.email}`}>
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            type="email"
            name="user_email"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={`${classes.input} ${classes.message}`}>
          <label htmlFor="message">Comment or Message</label>
          <textarea
            required
            id="message"
            name="message"
            value={Message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>

        <button className={classes.button}>Send</button>
      </form>
      <Snackbar
        message = "Your message was sent successfully"
        autoHideDuration = {4000}
        open = {open}
        onClose={closeHandler}
      />
    </>
  );
};

export default ContactForm;
