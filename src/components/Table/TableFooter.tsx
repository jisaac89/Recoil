import React from 'react';
import { Pager } from '../Pager/Pager';

export const TableFooter = ({ gotoPage, currentPage, numberOfPages, pageSize, flex }) => {
  return (
    <Pager
      className={'p10'}
      gotoPage={gotoPage}
      currentPage={currentPage}
      numberOfPages={numberOfPages}
      pageSize={pageSize}
      pageSizeDropDirection={flex ? 'up' : undefined}
    />
  );
};
