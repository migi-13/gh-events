import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

// added an important comment !
// ein sehr wichtiger Kommentar hinzugefügt !

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
