import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Clients extends React.Component {
  state = {};

  render() {
    const clients = [
      {
        id: '43434343',
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@gmail.com',
        phone: '555-555-5555',
        balance: '30',
      },
      {
        id: '43434345',
        firstName: 'Bob',
        lastName: 'Arlington',
        email: 'boba@gmail.com',
        phone: '555-555-666',
        balance: '100',
      },
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <FontAwesomeIcon icon="users" /> Clients{' '}
              </h2>
            </div>
            <div className="col-md-6" />
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <th>
                    {client.firstName} {client.lastName}
                  </th>
                  <th>{client.email}</th>
                  <th>${parseFloat(client.balance).toFixed(2)}</th>
                  <th>
                    <Link
                      to={`/clients/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <FontAwesomeIcon icon="arrow-alt-circle-right" />{' '}
                      Details
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return <h1>Loading...</h1>;
  }
}

export default Clients;
