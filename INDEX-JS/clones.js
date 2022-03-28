//ALL THE PROJECTS THAT WILL DISPLAY IN THE PROJECT SECTION ARE HERE

//Options guide:
//id: The option that will be used as the project main identifier, and it will be used to filter projects in searches. (Does not necessarily have to be in uppercase characters, but it's recommended to follow the patern)
//name: The project name, it will be displayed as the element title
//description: it will be displayed below the title when the user hovers the element
//class: the product card class, it will be set as "card {class}" in the element class
//href: the page where the user will be redirected after clicking in the element

const clones = [
    {
        "id": "AIRBNB",
        "name": "Airbnb Clone",
        "description": "Airbnb, Inc. is an American company that operates an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities",
        "class": "airbnb",
        "href": "https://mrjoy832.github.io/AIRBNB/"
    },
    {
        "id": "APPLE",
        "name": "Apple Clone",
        "description": "Apple India website is a online official store which sells all the Apple  products including the MacBooks, iPad series, Apple Watch and iPhones. ",
        "class": "apple",
        "href": "https://pranai2518.github.io/Apple-clone/"
    },
    {
        "id": "DISCORD",
        "name": "Discord Clone",
        "description": "Users communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities called servers",
        "class": "discord",
        "href": "https://htmlpreview.github.io/?https://github.com/XZANATOL/Clone-IT/blob/Discord_Clone/Discord_App_Clone/home.html" 
    },
    {
        "id": "FACEBOOK",
        "name": "Facebook Clone",
        "description": "Meta Platforms, Inc., doing business as Meta and formerly known as Facebook, Inc. ,multinational technology.",
        "class": "facebook",
        "href": "https://vaib215.github.io/Facebook-Clone/"
    },
    {
        "id": "FLIPKART",
        "name": "Flipkart Clone",
        "description": "Flipkart is a popular Indian company that deals with e-commerce.",
        "class": "flipkart",
        "href": "https://rayman-sodhi.github.io/Flipkart-Clone/"
    },
    {
        "id": "GITHUB",
        "name": "GitHub Clone",
        "description": "GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. ",
        "class": "github",
        "href": "https://htmlpreview.github.io/?https://github.com/XZANATOL/Clone-IT/blob/Github_Clone/Github_Homepage_Clone/index.html"
    },
    {
        "id": "GOOGLE",
        "name": "Google Clone",
        "description": "Google LLC is a technology company that specializes in Internet-related services and products.",
        "class": "google",
        "href": "https://quizzical-payne-d3e222.netlify.app/"
    },
    {
        "id": "GOOGLE KEEP",
        "name": "Google Keep Clone",
        "description": "Google Keep is a note-taking service included as part of the free, web-based Google Docs Editors suite offered by Google",
        "class": "google_keep",
        "href": "https://ajoe12.github.io/Google-Keep-Clone//"
    },
    {
        "id": "GOOGLE",
        "name": "Gmail Clone",
        "description": "Gmail is a free email service provided by Google. As of 2019, it had 1.5 billion active users worldwide. A user typically accesses Gmail in a web browser or the official mobile app. Google also supports the use of email clients via the POP and IMAP protocols.",
        "class": "gmail",
        "href": "#"
    },
    {
        "id": "HULU",
        "name": "Hulu Clone",
        "description": "Hulu is a streaming platform owned by The Walt Disney Company.",
        "class": "hulu",
        "href": "https://harshit995.github.io/hulu-clone/"
    },
    {
        "id": "KFC",
        "name": "KFC Clone",
        "description": "KFC is an American fast food restaurant that specializes in fried chicken.",
        "class": "apple",
        "href": "https://rayman-sodhi.github.io/KFC-Clone/"
    },
    {
        "id": "LINKEDIN",
        "name": "LinkedIn Clone",
        "description": "LinkedIn is a platform that is primarily used for professional networking and career.",
        "class": "linkedin",
        "href": "https://rayman-sodhi.github.io/Connected-In/"
    },
    {
        "id": "LINKTREE",
        "name": "Linktree Clone",
        "description": "Linktree is the launchpad to your latest video, article, recipe, tour, store, website, social post.",
        "class": "linktree",
        "href": "https://clonelinktree.netlify.app/"
    },
    {
        "id": "MICROSOFT",
        "name": "Microsoft Clone",
        "description": "Microsoft Corporation is a technology company which produces computer software related services",
        "class": "microsoft",
        "href": "https://19arnab190201.github.io/Microsoft-Clone/"
    },
    {
        "id": "NETFLIX",
        "name": "Netflix Clone",
        "description": "Netflix is a streaming service that offers a variety of TV shows, movies, anime and more",
        "class": "netflix",
        "href": "https://chatifyslack.netlify.app/"
    },
    {
        "id": "QUORA",
        "name": "Quora Clone",
        "description": "Users can collaborate by editing questions and commenting on answers that have been submitted by other users.",
        "class": "quora",
        "href": "https://rhydham2809.github.io/Qoura-Clone/"
    },
    {
        "id": "SLACK",
        "name": "Slack Clone",
        "description": "Slack is a proprietary business communication platform",
        "class": "slack",
        "href": "https://chatifyslack.netlify.app/"
    },
    {
        "id": "STARBUCKS",
        "name": "Starbucks Clone",
        "description": "Starbucks is the world's largest coffeehouse chain which offers variety of coffee beverages, smoothies, baked items,etc.",
        "class": "starbucks",
        "href": "https://girlwithasmile.github.io/Starbucks-clone/"
    },
    {
        "id": "SPOTIFY",
        "name": "Spotify Clone",
        "description": "Spotify is a digital music, podcast, and video streaming service with millions of songs and other content",
        "class": "spotify",
        "href": "https://spotify-clone-khaki-six.vercel.app/"
    },
    {
        "id": "TESLA",
        "name": "Tesla Clone",
        "description": "Tesla, Inc. is an American electric vehicle and clean energy company based in Austin, Texas. Tesla designs and manufactures electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, and related products and services",
        "class": "tesla",
        "href": "https://ayushsleeping-teslaclone.netlify.app/"
    },
    {
        "id": "YOUTUBE",
        "name": "YouTube Clone",
        "description": "YouTube is an American online video sharing and social media platform owned by Google.",
        "class": "youtube",
        "href": "https://anveshajain19.github.io/YOUTUBE-CLONE/"
    },
    {
        "id": "ZOOM",
        "name": "Zoom Clone",
        "description": "Zoom is an American communications technology company used for video chats or meeting.",
        "class": "zoom",
        "href": "https://rayman-video-app.herokuapp.com/"
    }
]

export default clones;