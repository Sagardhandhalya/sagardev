---
title: PWA
description: Progressive web application make your website feels like application.
date: June 22, 2020
updatedOn : Jun 14, 2022
coverImage: /images/post/pwa.png
tags: PWA, SW
---

### PWA 

Progressive Web Apps (PWAs) are web apps that use service workers, manifests, and other web-platform features in combination with progressive enhancement to give users an experience on par with native apps.

PWAs provide a number of advantages to users — including being installable, progressively enhanced, responsively designed, re-engageable, linkable, discoverable, network independent, and secure.

### Addition in web application

1. Service workers
2. caches
3. Responsive 
4. Best Offline performance
5. App Shell
6. Web app manifest

#### Service Worker
Service worker is script that will run independently that will be useful for request interceptor (check cache before making request). Service worker only work with HTTPS because of the security reasons.

-- we user fetch api and promise with service worker instead of xmlRequest.

 #### Service Worker LifeCycle

1. Register (Register with file path navigator.serviceworker.register)
2. install (In SW file selfaddEvent(install))
3. activate (in SW file self.addEvent(activate))

all event in SW provide e.waitUntil() method.

```js
---- main.js

console.log("main script added");

if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./SW.js")
    .then((e) => {
      console.log(e);
    })
    .catch((e) => console.log(e));
}

----- SW.js

// install

self.addEventListener("install", (e) => {
  console.log(e, "install success");
});

// activate

self.addEventListener("activate", (e) => {
  console.log(e, "activate success");
});

```
### Service worker scope
### Event Messages

use html5 messaging Api (post message) registretion.active.postMessage() to send self.addEvent('message') to receive in SW

SW to client 

self.clients.matchAll().then()

