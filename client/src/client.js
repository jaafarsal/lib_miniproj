const publicVapidkey = 'BH1E4EfKoR1kobs_XzW8HenHb3vivMgySwUH1-i77NX_DKgCWYDha1GeDqwVKfobXxqCRpm2ebYNcZNc9zpvkOc';

if('serviceWorker' in navigator){
    send().catch(err => console.log(err));
}

async function send(){
    console.log('Registering service worker ...');
    const register = await navigator.serviceWorker.register('/worker.js',{
        scope: '/'
    });
    console.log('Service Worker Registered');

    console.log('Registering Push ...');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidkey)
    });
    console.log('Push Registered');
    
    //send push notification
    console.log('Sending Push ...');
    await fetch('locahost:3000/api/books/subscribe/1',{
        method:'POST' ,
        body: JSON.stringify(subscription),
        headers:{
            'content-type': 'application/json'
        }
    });
    console.log('Push sent');

}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }