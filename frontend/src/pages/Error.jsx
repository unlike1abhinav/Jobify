import React from 'react';
import { Link, useRouteError} from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <div>
      Error
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Error
