import { Command } from 'commander';
import { LoginCommand } from './commands/login';
import { Command as CliCommand } from './interfaces/Command';

const commands: CliCommand[] = [new LoginCommand()];

const program = new Command('datacat');

commands.forEach(cmd => {
  program.command(cmd.name).description(cmd.description).action(cmd.execute);
});

export default program;
