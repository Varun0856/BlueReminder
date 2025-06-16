const notifier = require('node-notifier');
const os = require('os');

const { format } = require('date-fns');

const userInfo = os.userInfo();

function greetUser() {
  notifier.notify(
    {
      title: `Hey, ${userInfo.username}`,
      message: "Thanks for cloning the BlueReminder Repo.\n You will be notified to drink water every 15-20 mins.",
      sound: true
    }
  );
};

function sendNotification(){
  notifier.notify(
    {
      title: `Hey, ${userInfo.username}`,
      message: "Time to drink some water",
      sound: true
    }
  );
  const dateTime = `${format(new Date(), 'yyy/MM/dd\tHH:mm:ss')}`;
  console.log(`Notification sent: ${dateTime}`);
};

function getRandomTime() {
  const max = 20 * 60 * 1000;
  const min = 15 * 60 * 1000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

greetUser();

function scheduleNextNotification() {
  const interval = getRandomTime();
  setTimeout(() => {
    sendNotification();
    scheduleNextNotification();
  }, interval);
};

scheduleNextNotification();
