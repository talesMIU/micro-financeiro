import('./bootstrap')
	.catch(err => console.error(err));
import { APP_BASE_HREF } from '@angular/common';

providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
