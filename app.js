if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw-test/sw.js')
    .then(function(reg) {
      // registration worked
      console.log('static-v2 Registration succeeded. Scope is ' + reg.scope);
    })
    .catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
}
