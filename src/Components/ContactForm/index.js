import { BsLinkedin, BsMailbox, BsGithub } from "react-icons/bs";

export const ContactForm = () => {
  return (
    <div className="list">
      <h3>Contact Me</h3>
      <p>
        You can find me on{" "}
        <a target="_blank" href="https://linkedin.com/in/breencf">
          LinkedIn
        </a>
        ,{" "}
        <a target="_blank" href="https://angel.co/u/breencf">
          AngelList
        </a>
        , and{" "}
        <a target="_blank" href="https://github.com/breencf">
          github
        </a>
        , but if you'd rather go old school with an email, shoot your shot! I
        love talking to people.
      </p>
      <a target="_blank" href="mailto:breencf@gmail.com">
        <h1>
          <BsMailbox />
        </h1>
      </a>
    </div>
  );
};
