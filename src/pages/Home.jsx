import React, { useEffect } from 'react';
import '../styles/Home.css';
import meImage from '../assets/me.png';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const options = {
            strings: [
                t('frontenddeveloper'),
                t('backenddeveloper'),
                t('fullstackdeveloper'),
                t('imightbe'),
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: true,
        };

        const typed = new Typed(".typing-text", options);

        return () => {
            typed.destroy();
        };
    }, [t, i18n.language]);

    return (
    <div className="home">
        <div className="banner">
            <div className="text-content">
                <h1>{t('welcome')} {t('toMyPortfolio')}</h1>
                <p>
                    {t('Mynameis')} <span className="typing-text"></span>
                </p>
                <p>
                    {t('currentlyWorking')}
                </p>
                <p>
                    {t('stack')}
                </p>
            </div>
            <div className="image-container">
                <div className="image">
                    <img className="bannerimage" src={meImage} alt="Me" />
                </div>
                <h2 className="name">Kristian Pekkanen</h2>
            </div>
        </div>
        <div className="video-container">
            <iframe
                src="https://www.youtube.com/embed/vKFudd4_OSU"
                allowFullScreen
            ></iframe>
        </div>
        <div className="grid-container">
            <div className="skills card grid-item">
                <h1>{t('skills')}</h1>
                <div className="skills-icons">
                    <i>C</i>
                    <i>C#</i>
                    <i>Vue3</i>
                    <i>Python</i>
                    <i>CSS</i>
                    <i>HTML</i>
                    <i>JavaScript</i>
                    <i>React</i>
                    <i>Node.js</i>
                    <i>Express</i>
                    <i>SQL</i>
                    <i>MongoDB</i>
                    <i>Git</i>
                    <i>TypeScript</i>
                    <i>Redux</i>
                    <i>Bootstrap</i>
                    <i>Flutter</i>
                    <i>C++</i>
                    <i>React-Native</i>
                </div>
            </div>
            <div className="work-history card grid-item">
                <h1>{t('workHistory')}</h1>
                <ul>
                    <li>
                        <strong>05/2024–10/2024:</strong> {t('casamediaRole')}, Casamedia Ky<br />
                        {t('casamediaDescription')}
                    </li>
                    <li>
                        <strong>09/2021–08/2024:</strong> {t('tokmanniRole')}, Tokmanni Oy<br />
                        {t('tokmanniDescription')}
                    </li>
                    <li>
                        <strong>09/2019–03/2020:</strong> {t('eniaRole')}, Enia Oy<br />
                        {t('eniaDescription')}
                    </li>
                    <li>
                        <strong>05/2019–12/2019:</strong> {t('atkpalvelutRole')}, ATK-Palvelut ja Neuvonta Pekkanen<br />
                        {t('atkpalvelutDescription')}
                    </li>
                    <li>
                        <strong>01/2017–03/2017:</strong> {t('minimaniRole')}, Minimani Yhtiöt Oyj<br />
                        {t('minimaniDescription')}
                    </li>
                </ul>
            </div>
            <div className="about card grid-item">
                <h1>{t('aboutMe')}</h1>
                <p>
                    {t('aboutMeDescription1')}
                </p>
                <p>
                    {t('aboutMeDescription2')}
                </p>
            </div>
            <div className="education-history card grid-item">
                <h1>{t('educationHistory')}</h1>
                <ul>
                    <li>
                        <strong>2022–2024:</strong> {t('jamk')} - <br />
                        {t('degree')} {t('ICT240ECTS')}.
                    </li>
                    <li>
                        <strong>2020–2022:</strong>  - <br />
                        {t('degree')} {t('ICT240ECTS')}.
                    </li>
                    <li>
                        <strong>2015–2018:</strong> Seinäjoki - {t('vocationalSchool')} - Sedu<br />
                        {t('degree')} {t('telecommunications180ECTS')}.
                    </li>
                </ul>
            </div>
            <div className="hobbies card grid-item">
                <h1>{t('hobbies')}</h1>
                <div className="hobbies-icons">
                    <i className="bi bi-music-note-beamed"> {t('music')}</i>
                    <i className="bi bi-headphones"> {t('gaming')}</i>
                    <i className="bi bi-code"> {t('coding')}</i>
                    <i className="bi bi-car-front-fill"> {t('cars')}</i>
                    <i className="bi bi-sort-up"> {t('gym')}</i>
                </div>
            </div>
        </div>
    </div>
);

};

export default Home;
