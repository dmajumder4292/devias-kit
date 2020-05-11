import React from 'react';
import PropTypes from 'prop-types';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function CustomStylesProvider({ direction, children }) {
  if (direction !== 'rtl') {
    return children;
  }

  return (
    <StylesProvider jss={jss}>
      <div dir="rtl">{children}</div>
    </StylesProvider>
  );
}

CustomStylesProvider.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string
};

export default CustomStylesProvider;
