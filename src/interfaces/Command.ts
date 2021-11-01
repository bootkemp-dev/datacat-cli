export interface Command {
  name: string;
  description: string;

  execute(args: any[]): void | Promise<void>;
}
