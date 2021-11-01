import { injectable } from 'inversify';
import fs from 'fs';

export type ConfigValue = number | string | boolean;

export interface ConfigManager {
  set(key: string, value: ConfigValue): void;
  get(key: string): ConfigValue | undefined;
}

@injectable()
export class FilesystemConfigManager implements ConfigManager {
  set(key: string, value: ConfigValue) {
    let inputFile: string;

    try {
      inputFile = fs.readFileSync('.datacat.json', 'utf-8');
    } catch (err) {
      inputFile = '{}';
    }

    const config = JSON.parse(inputFile);

    config[key] = value;

    const outputFile = JSON.stringify(config);
    fs.writeFileSync('.datacat.json', outputFile);
  }

  get(key: string) {
    let inputFile: string;

    try {
      inputFile = fs.readFileSync('.datacat.json', 'utf-8');
    } catch (err) {
      return undefined;
    }

    const config = JSON.parse(inputFile);

    return config[key];
  }
}
