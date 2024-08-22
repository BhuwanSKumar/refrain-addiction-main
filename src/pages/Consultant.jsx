import React from 'react';
import { Link } from 'react-router-dom';
export default function Consultant() {
  return (
    <div className="flex gap-20 justify-center mx-auto py-80 justify-items-center">
      <Link to="/loginc">
        <button className="btn btn-smaller btn-primary">Login</button>
      </Link>
      <Link to="/registerc">
        <button className="btn btn-smaller btn-primary">Register</button>
      </Link>
    </div>
  );
}
