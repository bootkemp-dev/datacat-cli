import { injectable } from 'inversify';

export type ConfigValue = number | string | boolean;

export interface ConfigManager {
  set(key: string, value: ConfigValue): void;
  get(key: string): ConfigValue;
}

@injectable()
export class FilesystemConfigManager implements ConfigManager {
  set(key: string, value: ConfigValue): void {
    throw new Error('Method not implemented.');
  }

  get(key: string): ConfigValue {
    throw new Error('Method not implemented.');
  }
}
