import React from 'react';
import { Link } from 'react-router-dom';

export const LinksList = ({ links }) => {
  if (!links.length) {
    return (
      <div>
        <h3 className="center">Ссылок пока нет</h3>
        <br />
        <p className="center">
          <Link to={`/create`}>Создать новую?</Link>
        </p>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>№ п\п</th>
          <th>Ссылка</th>
          <th>Путь</th>
          <th>Открыть</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{link.to}</td>
              <td>{link.from}</td>
              <td>
                <Link to={`/detail/${link._id}`}>Открыть</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
