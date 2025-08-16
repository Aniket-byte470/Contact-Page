import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  console.log(styles);
  return (
    <div className={` ${styles.contact_section} `}>
      <h1>CONTACT US</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sapiente
        laboriosam laborum dolor necessitatibus a, ipsam assumenda. Saepe,
        ducimus enim?
      </p>
    </div>
  );
};

export default ContactHeader;
