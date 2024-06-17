import { initFederation } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

initFederation(environment.manifest, true)
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.log(err));
