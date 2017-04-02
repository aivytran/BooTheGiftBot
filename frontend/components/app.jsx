import React from 'react';
import { Link, hashHistory} from 'react-router';

const App = ({ children }) => (
  <div id="master-view">
    <p>My Main Page</p>
    <Link onClick={() => hashHistory.push('/privacy')}>Privacy</Link>
    {children}
  </div>
);

export default App;
