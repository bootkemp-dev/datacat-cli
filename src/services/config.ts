import { injectable } from 'inversify';
import fs from 'fs';

export type ConfigValue = number | string | boolean;

export interface ConfigManager {
  set(key: string, value: ConfigValue): void;
  get(key: string): ConfigValue;
}

@injectable()
export class FilesystemConfigManager implements ConfigManager {
  set(key: string, value: ConfigValue): void {
    // TODO: remove hardcoded path
    const inputFile = fs.readFileSync('.datacat.json', 'utf-8');
    const config = JSON.parse(inputFile);

    config[key] = value;

    const outputFile = JSON.stringify(config);
    fs.writeFileSync('.datacat.json', outputFile);
  }

  get(key: string): ConfigValue {
    const inputFile = fs.readFileSync('.datacat.json', 'utf-8');
    const config = JSON.parse(inputFile);

    return config[key];
  }
}
