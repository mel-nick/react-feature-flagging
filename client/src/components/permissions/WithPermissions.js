import React from 'react';
import { useSelector } from 'react-redux';

const WithPermissions = ({ children }) => {
  const userPermissions = useSelector(
    ({ permissions }) => permissions?.userPermissions
  );

  const childrenWithNewProps = React.Children.map(children, (child) => {
    let userPermission = false;
    if (userPermissions && child.props?.permission in userPermissions) {
      userPermission = userPermissions[child.props?.permission];
    }
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { userPermission });
    }
    return child;
  });

  return <>{childrenWithNewProps}</>;
};

export default WithPermissions;
