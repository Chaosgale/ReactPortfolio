import { useEffect } from 'react';
import PageContent from '../PageContent';

import { capitalizeFirstLetter } from '../../utils/helpers';
import { Outlet } from 'react-router-dom';

import classes from './index.module.css';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section className={classes.main}>
      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}
export default Page;
