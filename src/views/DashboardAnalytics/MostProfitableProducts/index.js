import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableRow,
  TableCell,
  Typography,
  Button,
  colors,
  TableBody
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import axios from 'src/utils/axios';
import GenericMoreButton  from 'src/components/GenericMoreButton';
import CircularProgress from './CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  inner: {
    minWidth: 700
  },
  details: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    marginRight: theme.spacing(2),
    flexShrink: 0,
    height: 56,
    width: 56
  },
  subscriptions: {
    fontWeight: theme.typography.fontWeightMedium
  },
  price: {
    whiteSpace: 'nowrap'
  },
  value: {
    color: colors.green[600],
    fontWeight: theme.typography.fontWeightMedium
  },
  conversion: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  conversionStats: {
    whiteSpace: 'nowrap',
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function MostProfitableProducts({ className, ...rest }) {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchProducts = () => {
      axios.get('/api/dashboard/profitable-products').then(response => {
        if (mounted) {
          setProducts(response.data.products);
        }
      });
    }

    fetchProducts();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Most Profitable Products"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableBody>
                {products.map(product => (
                  <TableRow
                    hover
                    key={product.id}
                  >
                    <TableCell>
                      <div className={classes.details}>
                        <img
                          alt="Product"
                          className={classes.image}
                          src={product.image}
                        />
                        <div>
                          <Typography variant="h6">{product.name}</Typography>
                          <Typography variant="subtitle2">
                            <span className={classes.subscriptions}>
                              {product.subscriptions}
                            </span>{' '}
                            Active
                          </Typography>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Price</Typography>
                      <Typography
                        className={classes.price}
                        variant="subtitle2"
                      >
                        <span className={classes.value}>
                          {product.currency}
                          {product.price}
                        </span>{' '}
                        monthly
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <div className={classes.conversion}>
                        <div className={classes.conversionStats}>
                          <Typography
                            align="right"
                            variant="h6"
                          >
                            {product.progress}%
                          </Typography>
                          <Typography variant="subtitle2">
                            Conversion Rate
                          </Typography>
                        </div>
                        <CircularProgress value={product.progress} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          component={RouterLink}
          size="small"
          to="#"
          variant="text"
        >
          See all
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </Button>
      </CardActions>
    </Card>
  );
}

MostProfitableProducts.propTypes = {
  className: PropTypes.string
};

export default MostProfitableProducts;
