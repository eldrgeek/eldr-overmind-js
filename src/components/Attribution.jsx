import { CurrentModule, React, useApp } from '../CurrentModule';
const Attribution = () => {
  return (
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>
        Created by <a href="http://github.com/br1anchen/">Brian Chen</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  );
};

export default Attribution;
// CurrentModule(Attribution);
