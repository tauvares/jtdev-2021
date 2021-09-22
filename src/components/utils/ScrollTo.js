import React from 'react';
import {
  element, string,
} from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const ScrollTo = ({
  children,
  section,
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const goToSection = (event) => {
    const anchor = ((event.target && event.target.ownerDocument) || document).querySelector(section);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div onClick={goToSection} in={`${trigger}`} role="presentation">
      {children}
    </div>
  );
};

ScrollTo.propTypes = {
  children: element.isRequired,
  section: string.isRequired,
};

export default ScrollTo;
