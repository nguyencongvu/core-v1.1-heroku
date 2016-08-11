// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '866846263448510', // your App ID
        'clientSecret'  : 'fe1cf18a001ae35b82684266c919eb08', // your App Secret
        'callbackURL'   : 'http://www.dinhcu.top/auth/facebook/callback', 
        'profileFields': ["id", "email", "gender", "about", "birthday", "cover"]
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '873026146341-ce0605glrtsfebtiqt0vnsmd3k9nidfi.apps.googleusercontent.com',
        'clientSecret'  : '923j9wnJZPWdsJEzahQz0egI',
        'callbackURL'   : 'http://localhost:8000/auth/google/callback'
    }, 

    'mailer' : {
        // service: "Gmail",
        port: 465,
        service: "SendGrid",
        // user: 'nguyencongvu@gmail.com',
        // pass: 'Go.1b.16', 
        user: "dinhcu.top",
        pass: "Se.1b.16",
        
        from: 'system@domain.com', //-- reply To   
        templates: "../public/templates",
    }

};
