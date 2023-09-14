import './Contacts.css';

const Contacts = () => {
  return (
    <div className="container">
      <div className="contactsBackground">
        <div className="contacts">
          <h2>Contacts</h2>
          <ul>
            <li>phone +375 (66) 1234567</li>
            <li>e-mail: XX@gmail.com</li>
            <li>
              <a
                href="https://www.linkedin.com/in/tatsiana-bandelikova/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/tatsiana-bandelikova/
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tbandelikova"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/tbandelikova
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
