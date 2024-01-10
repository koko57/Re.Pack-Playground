import {AppRegistry} from 'react-native';
import {ScriptManager, Script} from '@callstack/repack/client';
import App from './App';
import {name as appName} from './app.json';

ScriptManager.shared.addResolver(async scriptId => {
  if (__DEV__) {
    return {
      url: Script.getDevServerURL(scriptId),
      cache: false,
    };
  }

  return {
    url: Script.getRemoteURL(`http://my-domain.com/${scriptId}`),
  };
});

AppRegistry.registerComponent(appName, () => App);
