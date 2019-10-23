//ZModel
import { CurrentModule, React, useApp } from '../CurrentModule';
const ZModel = () => {
  const { state, actions, effects } = useApp();
  return 'something';
};

export default ZModel;
CurrentModule(ZModel);
