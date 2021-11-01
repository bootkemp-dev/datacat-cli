import { injectable } from 'inversify';

export type ConfigKey = number | string | boolean;

export interface ConfigManager {
  set(key: ConfigKey): void;
  get(): ConfigKey;
}

@injectable()
export class FilesystemConfigManager implements ConfigManager {
  set(key: ConfigKey): void {
    throw new Error('Method not implemented.');
  }

  get(): ConfigKey {
    throw new Error('Method not implemented.');
  }
}
