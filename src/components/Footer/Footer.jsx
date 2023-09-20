import { useEffect, useState } from "react";

const Footer = () => {
  const [text, setText] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
      );
      const result = await response.json();
      setText(result);
    };
    fetchData();
  }, []);

  return (
    <footer
      data-theme="luxury"
      className="footer footer-center p-1 bg-base-100 text-base-content font-ox"
    >
      <aside>
        <p>Copyright © 2023 - All right reserved by General Assembly SEI 46</p>
        {text !== null && (
          <p>
            <span className="text-base">You should know:</span>
            <br />
            <span className="text-emerald-300">{text.text}</span>
          </p>
        )}
      </aside>
    </footer>
  );
};

export default Footer;
