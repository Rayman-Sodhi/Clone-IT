import React from 'react';
import classes from './Announcements.module.css';
import Card from '../../../Card/Card';
import Link from '../../../Link/Link';

const Announcements = () => {
    return (
        <Card title="Important Announcements">
            <div className={classes.UpdateBox}>
                Updates
            </div>
            <p className={classes.Text}>Bringing to you the latest updates from the Chef's kitchen:</p>

            <ul className={classes.AnnouncementsList}>
                <li>
                    <p>
                    <Link link="https://www.codechef.com/LTIME94?itm_medium=hpannouncement&itm_campaign=MarLT" 
                        fontSize="12px" 
                        fontStyle="italic">
                        March Lunchtime
                    </Link>
                    {' '}
                    <span>
                    is on <strong>27th March, from 7:30 PM - 10 PM IST</strong>. The contest has an exciting list of recruiters such as Gameskraft, Quadeye Securities, Dialpad and BetterPlace. Since it's our birthday month, we'll also be giving away prizes to double the number of winners than usual. Please note the change in timings. The contest will end at 10 PM instead of the usual 10:30 PM.
                    </span>
                    </p>
                </li>

                <li>
                    <p>
                    <Link link="https://www.codechef.com/START2?itm_medium=hpannouncement&itm_campaign=MarStart" 
                        fontSize="12px" 
                        fontStyle="italic">
                        March Starters
                    </Link>
                    {' '}
                    <span>
                    in on  <strong>28th March, from 4 PM - 7 PM IST</strong>. The contest is rated exclusively for Div 3. Don't forget to invite the budding programmers you know to participate.
                    </span>
                    </p>
                </li>

                <li>
                    <p>
                    
                    Join us on <strong>March 31, at 8 PM IST </strong> for the next episode of Weekends With Champions with Malvika Raj Joshi.
                    {' '}
                    <Link link="https://www.codechef.com/START2?itm_medium=hpannouncement&itm_campaign=MarStart" 
                        fontSize="12px" 
                        fontStyle="italic">
                        Register Now
                    </Link>
                    {' '}
                     to ask your questions.
                    
                    </p>
                </li>

                <li>
                    <p>
                    
                    The 4th edition of Dead Heat, a 60-minute MCQ based aptitude test, will be conducted on 
                    <strong>March 27th, at 2 PM IST</strong>.
                    {' '}
                    <Link link="https://unacademy.com/test-series/dead-heats-by-codechef/HW3UH1XO?utm_source=hpannouncement&utm_medium=organic_social&utm_campaign=deadheat4" 
                        fontSize="12px" 
                        fontStyle="italic">
                        Enroll Now
                    </Link>
                    {' '}
                    and stand a chance to win exciting prizes.
                    
                    </p>
                </li>

                <li>
                    <p>
                    
                    The Chef has turned twelve, and we have to admit that it’s been a marvelous journey so far. Head over to our
                    {' '}
                    <Link link="https://unacademy.com/test-series/dead-heats-by-codechef/HW3UH1XO?utm_source=hpannouncement&utm_medium=organic_social&utm_campaign=deadheat4" 
                        fontSize="12px" 
                        fontStyle="italic">
                        blog
                    </Link>
                    {' '}
                    to know what was cooking in the Chef’s kitchen throughout the year.
                    
                    </p>
                </li>
            </ul>
        </Card>
    )
}

export default Announcements;
