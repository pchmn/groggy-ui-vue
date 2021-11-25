import { GTheme } from '@themes/theme';
import baseConfiguration from '@themes/twind/baseConfiguration';
import { DeepPartial } from '@utils/deepPartial';
import merge from 'deepmerge';
import { Configuration, setup } from 'twind';

function extendConfiguration(
  baseConf: Configuration,
  newConf: DeepPartial<Configuration>
): DeepPartial<Configuration> {
  return merge(baseConf, newConf);
}

export function setupTwind(
  gTheme: GTheme,
  twindConf?: DeepPartial<Configuration>
) {
  let configuration = baseConfiguration(gTheme);
  if (twindConf) {
    configuration = extendConfiguration(
      configuration,
      twindConf
    ) as Configuration;
  }
  setup(configuration);
}
