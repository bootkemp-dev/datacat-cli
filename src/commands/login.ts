import { Command } from '../interfaces/Command';

export class LoginCommand implements Command {
  name = 'login';
  description = 'Logs in to the Datacat service';

  execute(args: any[]) {
    console.log("I'm alive!");
  }
}
