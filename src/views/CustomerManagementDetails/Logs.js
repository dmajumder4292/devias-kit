import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  colors
} from '@material-ui/core';
import axios from 'src/utils/axios';
import Label from 'src/components/Label';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1150
  },
  methodCell: {
    width: 100
  },
  statusCell: {
    width: 64
  }
}));

function Logs({ className, ...rest }) {
  const classes = useStyles();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchLogs = () => {
      axios.get('/api/management/customers/1/logs').then(response => {
        if (mounted) {
          setLogs(response.data.logs);
        }
      });
    }

    fetchLogs();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Card>
        <CardHeader title="Customer logs" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar options={{ suppressScrollY: true }}>
            <div className={classes.inner}>
              <Table>
                <TableBody>
                  {logs.map(log => (
                    <TableRow key={log.id}>
                      <TableCell className={classes.methodCell}>
                        <Typography variant="h6">{log.method}</Typography>
                      </TableCell>
                      <TableCell className={classes.statusCell}>
                        <Label
                          color={
                            log.status === 200
                              ? colors.green[600]
                              : colors.red[600]
                          }
                        >
                          {log.status}
                        </Label>
                      </TableCell>
                      <TableCell>{log.route}</TableCell>
                      <TableCell>{log.desc}</TableCell>
                      <TableCell align="right">{log.IP}</TableCell>
                      <TableCell align="right">
                        {moment(log.created_at).format('YYYY/MM/DD | hh:mm:ss')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
}

Logs.propTypes = {
  className: PropTypes.string
};

export default Logs;
