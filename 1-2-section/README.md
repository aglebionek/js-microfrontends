notes:
this project is basically two different projects, cart and products. We connect those projects together inside the container app, using webpack module federation plugin. 

import('./bootstrap'); vs import './bootstrap'; The first one is dynamic import, the second one is static import. The first one is used to import a module on demand, the second one is used to import a module at the beginning of the application. Basically, the first one is asynchronous, the second one is synchronous.

