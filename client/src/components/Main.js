/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getGlobalPermissions,
  getUserPermissions,
} from '../actions/permissions';
import Button from './buttons/Button';
import WithPermissions from './permissions/WithPermissions';
import Section1 from './sections/Section1';

const Main = () => {
  const dispatch = useDispatch();
  const globalPermissions = useSelector(
    ({ permissions }) => permissions?.globalPermissions
  );
  const userPermissions = useSelector(
    ({ permissions }) => permissions?.userPermissions
  );

  useEffect(() => {
    !!globalPermissions && dispatch(getGlobalPermissions());
    !!userPermissions && dispatch(getUserPermissions());
  }, []);

  return (
    <>
      <WithPermissions>
        <Button
          permission={'CREATE'}
          buttonText={'CREATE BUTTON'}
          backgroundColor={'green'}
          textColor={'red'}
        />
      </WithPermissions>
      <Button
        permission={'DELETE'}
        buttonText={'DELETE BUTTON'}
        backgroundColor={'red'}
        textColor={'black'}
      />
      <WithPermissions>
        <Section1 permission={'SHOW_SECTION_1'} />
      </WithPermissions>
    </>
  );
};

export default Main;
