//ZModel
import { React, CurrentModule, useApp } from '../CurrentModule';
const ZModel = () => {
  const { state, reaction } = useApp();

  React.useEffect(() => {
    console.log('stilll around');
    const cleaner = reaction(
      ({ todos }) => state.todos,
      todos => {
        console.log('these todos');
      }
    );
    return function cleanup() {
      cleaner();
      console.log('disposed');
    };
  });

  React.useEffect(() =>
    reaction(
      state => 1,
      () => {
        console.log('test');
      }
    )
  );
  return 'Experimental reaction testings';
};

export default ZModel;
CurrentModule(ZModel);
