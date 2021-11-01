import { Container } from 'inversify';
import { ConfigManager, FilesystemConfigManager } from '../config';
import types from './types';

const container = new Container();
container.bind<ConfigManager>(types.configManager).to(FilesystemConfigManager);

export default container;
