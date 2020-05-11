import { colors } from '@material-ui/core';

export default {
  root: {
    backgroundColor: colors.blueGrey[50],
    color: colors.blueGrey[900]
  },
  deletable: {
    '&:focus': {
      backgroundColor: colors.blueGrey[100]
    }
  }
};
