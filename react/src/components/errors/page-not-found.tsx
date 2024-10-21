/*******************************************************************************
 * Copyright (c) 2022.  - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yufei Liu <feilfly@gmail.com>, 12/04/2022, 11:29
 ******************************************************************************/

import React from 'react';
import {Card} from 'react-bootstrap';

export function PageNotFound() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Page Not Found</Card.Title>
        <Card.Text>
          Sorry, the page you are looking for is not available.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
