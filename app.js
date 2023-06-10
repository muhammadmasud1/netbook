let message = document.querySelector('.show-message');
let showMessage = document.querySelector('.fb-message');



message.addEventListener('click', function(){
    showMessage.classList.toggle('active');
    notificationArea.classList.remove('active');
    showDashboard.classList.remove('active');
})

// Notification 
let notification = document.querySelector('.noti-fica');
let notificationArea = document.querySelector('.notificaton-main');


notification.addEventListener('click', function(){
    notificationArea.classList.toggle('active');
    showMessage.classList.remove('active');
    showDashboard.classList.remove('active');
})

// admin 
let admin = document.querySelector('.admin');

let showDashboard = document.querySelector('.admin-deshboard');

admin.addEventListener('click',function(){
    showDashboard.classList.toggle('active');
    notificationArea.classList.remove('active');
    showMessage.classList.remove('active');
})
