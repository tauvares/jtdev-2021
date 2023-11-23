import React from 'react';
import { func } from 'prop-types';
import { InlineIcon } from '@iconify/react';

const ToggleLanguage = ({ loadPickedLanguage }) => (
  <div className="language-buttons">
    <div className="language-item">
      <InlineIcon
        id={window.$primaryLanguageIconId}
        icon="openmoji:flag-canada"
        fontSize="40px"
        onClick={() => loadPickedLanguage(window.$primaryLanguage, window.$primaryLanguageIconId)}
      />
      <span>EN-CA</span>
    </div>
    <div className="language-item">
      <InlineIcon
        id={window.$secondaryLanguageIconId}
        icon="openmoji:flag-brazil"
        fontSize="40px"
        onClick={() => loadPickedLanguage(window.$secondaryLanguage, window.$secondaryLanguageIconId)}
      />
      <span>PT-BR</span>
    </div>
    <div className="language-item">
      <InlineIcon
        id={window.$thirdLanguageIconId}
        icon="openmoji:quebec-flag"
        fontSize="40px"
        onClick={() => loadPickedLanguage(window.$thirdLanguage, window.$thirdLanguageIconId)}
      />
      <span>FR-CA</span>
    </div>
  </div>
);

ToggleLanguage.propTypes = {
  loadPickedLanguage: func.isRequired,
};

export default ToggleLanguage;
