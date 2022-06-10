import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/models/routes';
import { GithubLogo } from 'src/assets';

function Logo() {
  return (
    <Link to={ROUTES.MAIN}>
      <GithubLogo width={40}/>
    </Link>
  );
}

export default memo(Logo);
