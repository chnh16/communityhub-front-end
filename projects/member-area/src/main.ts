import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MemberModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(MemberModule)
  .catch(err => console.error(err));
