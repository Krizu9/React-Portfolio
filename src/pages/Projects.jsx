import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Projects.css';
import gymdiaryfrontend from '../assets/gymdiary_front.png';
import gymdiarybackend from '../assets/gymdiary_back.png';
import gymdiarymobile from '../assets/gymdiary_mobile.png';

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="projects">
            <h1>{t('projects')}</h1>
            <p>{t('projectsDescription')}</p>
            <div className="cardGrid">
                <div className="card">
                    <h2 className="projectname">{t('gymdiaryfrontend')}</h2>
                    <img src={gymdiaryfrontend} alt={t('project2Title')} />
                    <p>{t('gymDiaryFrontendDescription')}</p>
                    <p>{t('gymDiaryFrontendTechnologies')}</p>
                    <div className="project-links">
                        <a href="https://github.com/Krizu9/gymdiary-app-frontend?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">{t('souceCode')}</a>
                    </div>
                </div>

                <div className="card">
                    <h2 className="projectname">{t('gymdiarybackend')}</h2>
                    <img src={gymdiarybackend} alt={t('project3Title')} />
                    <p>{t('gymDiaryBackendDescription')}</p>
                    <p>{t('gymDiaryBackendTechnologies')}</p>
                    <div className="project-links">
                        <a href="https://github.com/Krizu9/gymdiary-app-backend" target="_blank" rel="noopener noreferrer">{t('souceCode')}</a>
                    </div>
                </div>

                <div className="card">
                    <h2 className="projectname">{t('gymDiaryMobile')}</h2>
                    <img src={gymdiarymobile} alt={t('project4Title')} />
                    <p>{t('gymDiaryMobileDescription')}</p>
                    <p>{t('gymDiaryMobileTechnologies')}</p>
                    <div className="project-links">
                        <a href="https://github.com/Krizu9/flutter-GymDiary" target="_blank" rel="noopener noreferrer">{t('souceCode')}</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Projects;
