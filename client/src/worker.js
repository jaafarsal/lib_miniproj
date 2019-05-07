self.addEventListener('push' , e =>{
    try{
        const data = e.data.json();
        console.log('Push Received');
        self.registration.showNotification(data.title , {
            body: data.body , 
            icon: data.icon
        })
    } catch (error) {
        console.log('Error while receiving : ' , error);
    }
});