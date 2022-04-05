export const Homepage = () => {
  return (
    <>
      <div className="left">
        <img
          id="profile"
          src="https://res.cloudinary.com/jadecabbage/image/upload/v1648848247/loirebnb%20assets/division-square_v9auz5.jpg"
        />
      </div>
      <div className="right">
        <h3>Hi! I'm Chris.</h3>
        <p>
          I'm a software engineer based in Brooklyn. You can check out some of
          the languages and frameworks I'm comfortable with above, but I will
          say I have a particular fondness for <em>React</em> and <em>SQL</em>.
          Crazy, right?{" "}
        </p>
        <p>
          Prior to Software Engineering, I worked in the Wine Industry, with
          experience in everything from production, to retail sales, to
          hospitality and restaurants. Wine is still a huge part of my life, so{" "}
          let's talk about it!
        </p>
        <p>
          Some fun facts about me: in addition to English, I'm fluent in
          Mandarin Chinese and French, I'm a huge sports fan (Go Chelsea /
          trailblazers / Patriots / Lewis Hamilton!), and I love listening to
          and discovering music both new and old. I also <em>really</em> love
          the Jadeite Cabbage{" "}
          <a href="https://en.wikipedia.org/wiki/Jadeite_Cabbage">(崔玉白菜)</a>
          .
        </p>
      </div>
    </>
  );
};
