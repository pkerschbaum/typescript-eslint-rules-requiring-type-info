import fs from 'fs';

import { constants } from '#pkg/constants';

export function getRules() {
  // eslint-disable-next-line node/no-sync -- this function should be usable from .eslintrc.cjs files, and should return the rules synchronously
  return JSON.parse(fs.readFileSync(constants.RULES_PATH, { encoding: 'utf8' })) as string[];
}
