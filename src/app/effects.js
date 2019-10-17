import page from 'page';

export const storage = {
  saveTodos(todos) {
    console;
    localStorage.setItem('todos', JSON.stringify(todos));
  },
  getTodos() {
    console.log('gotten');
    return {}; //JSON.parse(localStorage.getItem('todos') || '{}');
  },
};

export const router = {
  initialize(routes) {
    Object.keys(routes).forEach(url => {
      page(url, ({ params }) => routes[url](params));
    });
    page.start();
  },
  goTo(url) {
    page.show(url);
  },
};

export const ids = {
  create() {
    return Date.now().toString();
  },
};
