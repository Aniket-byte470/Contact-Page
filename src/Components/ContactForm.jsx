import styles from "./ContactForm.module.css";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import TextField from "@mui/material/TextField";
const ContactForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Name:", event.target[0].value);
    console.log("E-Mail:", event.target[2].value);
    console.log("TEXT:", event.target[4].value);
  };
  return (
    <section className={`${styles.container}`}>
      <div className={styles.contactForm}>
        <div className={styles.top_btn}>
          <Button
            text="VIA CHAT SUPPORT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhone fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL"
          icon={<MdEmail fontSize="24px" />}
          className={styles.outline_btn}
        />

        <form className={styles.form_control} onSubmit={onSubmit}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className={styles.input}
          />

          <TextField
            id="outlined-basic"
            label="E-Mail"
            variant="outlined"
            className={styles.input}
          />

          <TextField
            id="outlined-multiline-static"
            label="TEXT"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button isOutline={false} text="SUBMIT" />
          </div>
        </form>
      </div>

      <div className={styles.ContactImage}>
        <img src="./Images/img.svg" alt="contact" />
      </div>
    </section>
  );
};

export default ContactForm;
