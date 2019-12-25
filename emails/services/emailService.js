'use strict'
import storageService from '../services/storageService.js'

let gEmails = [

    {
        subject: 'Talmashiah invited you to Talmashiah/Appsus',
        body: 'You can accept or decline this invitation. You can also head over to https://github.com/Talmashiah/Appsus to check out the repository or visit @Talmashiah to learn a bit more about them Note: This invitation was intended for shmuel7e@gmail.com. If you were not expecting this invitation, you can ignore this email. If @Talmashiah is sending you too many emails, you can block them or report abuse..',
        isRead: false,
        sentAt: 217453298532,
        id:1
    },
    {
        subject: 'Puki - Weve Updated our Privacy Notice and Terms of Service',
        body: "We’re updating our legal documents next month to prepare for Riot’s new games! To keep things simple, we’ll have a single Terms of Service (what we used to call the Terms of Use) and Privacy Notice (what we used to call the Privacy Policy) for all our games. These new documents are very similar to what we already have now. You can review both of these documents on our website: ",
        isRead: false,
        sentAt: 23543257932,
        id:2
    },
    {
        subject: '12 items from your Steam wishlist are on sale',
        body: 'Specific pricing and discounts may be subject to change. Please check the Steam store page for details. You are receiving this email because the above items are on your Steam Wishlist',
        isRead: false,
        sentAt: 237463284,
        id:3
    },
    {
        subject: 'Reminder: You’re invited to be part of the 2019 State of the Developer Survey',
        body: 'Hi, Thank you for being part of the HackerRank community of over 7 million developers! We just launched our 3rd annual survey on the state of developer skills and we’d love your input. What’s the best place for developers to learn new skills and what new skills are they learning? What are the most in demand skills that employers are looking for in 2020? These are the questions we’re trying to answer to share with our community.',
        isRead: false,
        sentAt: 258320957238957,
        id:4
    },
    {
        subjcet: 'on boots, my boss, and sending emails',
        body: 'This isnt a Cyber Monday email Normally, I would send you an email today with a deal you ‘cannot miss’. You see, I plan my email campaigns on monday.com. I map all the steps needed on my board, and follow the plan until you receive this Cyber Monday email. The thing is, monday.com is really good for organizing projects, so you end up delivering what you need on time. My Cyber Monday campaign was ready two weeks ago. I mentioned @Roy (my boss) in an update on my board, to share the plan with him. He replied “Pauline, let’s not do Cyber Monday. Instead of a time-limited discount, let’s offer time. We can’t expect anyone to buy business software within 24 hours.” I think he’s right. Let’s use Cyber Monday for what it was traditionally – a time for shopping for that great pair of jeans you’ve been eyeing up or a present for your bae. Well talk business tomorrow Today, I’m buying the boots of my dreams.Pauline',
        isRead: false,
        sentAt: 2958732987593285,
        id:5

    },
    {
        subject: 'Product Review for Order #410107347-0',
        body: 'How have you been enjoying your recent purchase? When you’ve got a few minutes to spare, how about writing a review? Your experience can be a big help to other customers.',
        isRead: false,
        sentAt: 859237592375932,
        id:6
    },
    {
        subject: 'Bitdefender Antivirus Plus 2020',
        body: 'Thank you for choosing Bitdefender! Lets take a moment to set up Bitdefender Antivirus Plus 2020 on your devices. First, click on the Activate Subscription button below to link it to your Bitdefender Central account. In case you dont have an account, please create one here. Protect your devices with one account Bitdefender Central lets you remotely manage, secure, and optimize your Bitdefender-protected devices. You can use a single account to manage your subscription for one or more devices. You can manage your security from your mobile device. Anytime. Anywhere. Bitdefender Central is a companion app that empowers you to remotely manage security on your Bitdefender-protected devices directly from your smartphone. If you have any questions, you will most likely find your answers here, or you can contact our support team 24/7. It\'\s great having you on board!The Bitdefender Team',
        isRead: false,
        sentAt: 239573257932532,
        id:7
    },

    {
        subject: 'New login to Instagram from Chrome on Windows',
        body: 'We Noticed a New Login, shmuel7_e We noticed a login from a device you don\'\t usually use.',
        isRead: false,
        sentAt: 32972398752398532,
        id:8

    },
    {
        subjcet: 'What a douchbag',
        body: 'shmuel you are a douchbag',
        isRead: false,
        sentAt: 23572395732,
        id:9,
    },
    {
        subject: 'lorem ipsum dolor sit amet',
        body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure ad magni ratione consequatur explicabo enim. Eos, aperiam mollitia. Perferendis enim similique inventore quidem earum provident laboriosam minus, molestiae atque.',
        isRead: false,
        sentAt: 32985329857392,
        id:10

    }
]



function getEmails(filterBy) {
    if(storageService.load('emails')) {
        gEmails = storageService.load('emails');
    } else {
        storageService.store('emails',gBooks);
    }
    if (!filterBy) return Promise.resolve([...gEmails]);
    const filteredEmails = gBooks.filter(book=> book.title.includes(filterBy.name) 
    && book.listPrice.amount < filterBy.price);
    return Promise.resolve([...filteredEmails]);
}

