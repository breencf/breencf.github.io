import { BsLinkedin, BsMailbox, BsGithub } from "react-icons/bs";

export const ContactForm = () => {
  return (
    <div className="list">
      <h1>Contact Me</h1>
      <p>
        You can find me on{" "}
        <a href="https://linkedin.com/in/breencf">LinkedIn</a>,{" "}
        <a href="https://angel.co/u/breencf">AngelList</a>, and{" "}
        <a href="https://github.com/breencf">github</a>, but if you'd rather go
        old school with an email, shoot your shot! I love talking to people.
      </p>
      <a href="mailto:breencf@gmail.com">
        <h1>
          <BsMailbox />
        </h1>
      </a>
    </div>
  );
};
