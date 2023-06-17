import { Options } from 'yargs';

import { SnapConfig } from '../config';

// eslint-disable-next-line @typescript-eslint/ban-types
type OptionalArguments<T = {}> = T & {
  /** Non-option arguments */
  _?: (string | number)[];

  /** The script name or node command */
  $0?: string;

  /** All remaining options */
  [argName: string]: unknown;
};

type YargsArgs = {
  // Context is added by the config middleware.
  context: {
    config: SnapConfig;
  };

  config?: string;
  sourceMaps: boolean;
  stripComments: boolean;
  transformHtmlComments: boolean;
  port: number;
  dist: string;
  src: string;
  eval: boolean;
  outfileName: string;
  serve: boolean;
  directory?: string;
} & OptionalArguments;

type Option = {
  stripComments: boolean;
  transformHtmlComments: boolean;
} & Options;
