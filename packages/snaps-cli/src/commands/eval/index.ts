import yargs from 'yargs';

import builders from '../../builders';
import { YargsArgs } from '../../types/yargs';
import { evaluate } from './eval';

const command = {
  command: ['eval', 'e'],
  desc: 'Attempt to evaluate snap bundle in SES',
  builder: (yarg: yargs.Argv) => {
    // Browserify options.
    yarg.option('bundle', builders.bundle);

    // Webpack options.
    yarg.option('input', builders.input);
  },
  handler: async (argv: YargsArgs) =>
    evaluate(argv.context.config, { input: argv.input }),
};

export default command;