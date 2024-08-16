import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Projects.css';
import meImage from '../assets/movieswithreact.png';

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="projects">
            <h1>{t('projects')}</h1>
            <p>{t('projectsDescription')}</p>
            <div className="cardGrid">
                <div className="card">
                    <h2 className="projectname">{t('movieswithreact')}</h2>
                    <img src={meImage} alt={t('project1Title')} />
                    <p>{t('projectDescription')}</p>
                    <p>{t('technologies')}</p>
                    <div className="project-links">
                        <a href="https://github.com/Krizu9/gitlab-test-app" target="_blank" rel="noopener noreferrer">{t('souceCode')}</a>
                        <a href="https://krizu9.github.io/gitlab-test-app/" target="_blank" rel="noopener noreferrer">{t('liveDemo')}</a>
                    </div>
                </div>
                <div className="card">
                    <h2 className="projectname">{t('project2Title')}</h2>
                    <img src="https://via.placeholder.com/150" alt={t('project2Title')} />
                    <p>{t('projectDescription')}</p>
                    <p>{t('technologies')}</p>
                    <div className="project-links">
                        <a href="waitingtogeteverythinglive" target="_blank" rel="noopener noreferrer">{t('souceCode')}</a>
                        <a href="waitingtogeteverythinglive" target="_blank" rel="noopener noreferrer">{t('liveDemo')}</a>
                    </div>
                </div>
                <div className="card">
                    <h2 className="projectname">{t('project3Title')}</h2>
                    <img src="https://via.placeholder.com/150" alt={t('project3Title')} />
                    <p>{t('projectDescription')}</p>
                    <p>{t('technologies')}</p>
                    <div className="project-links">
                        <a href="waitingtogeteverythinglive" target="_blank" rel="noopener noreferrer">{t('souceCode')}</a>
                        <a href="waitingtogeteverythinglive" target="_blank" rel="noopener noreferrer">{t('liveDemo')}</a>
                    </div>
                </div>
                <div className="card">
                    <h2 className="projectname">{t('project4Title')}</h2>
                    <img src="https://via.placeholder.com/150" alt={t('project4Title')} />
                    <p>{t('projectDescription')}</p>
                    <p>{t('technologies')}</p>
                    <div className="project-links">
                        <a href="waitingtogeteverythinglive" target="_blank" rel="noopener noreferrer">{t('souceCode')}</a>
                        <a href="waitingtogeteverythinglive" target="_blank" rel="noopener noreferrer">{t('liveDemo')}</a>
                    </div>
                </div>
                <div className="card">
                    <h2 className="projectname">{t('project5Title')}</h2>
                    <img src="https://via.placeholder.com/150" alt={t('project5Title')} />
                    <p>{t('projectDescription')}</p>
                    <p>{t('technologies')}</p>
                    <div className="project-links">
                        <a href="waitingtogeteverythinglive" target="_blank" rel="noopener noreferrer">{t('souceCode')}</a>
                        <a href="waitingtogeteverythinglive" target="_blank" rel="noopener noreferrer">{t('liveDemo')}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
