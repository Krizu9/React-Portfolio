import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Kristian</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse items" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">{t('home')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Projects">{t('projects')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">{t('contact')}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="languageDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Language
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                                <li><button className="dropdown-item lang" onClick={() => changeLanguage('en')}>English</button></li>
                                <li><button className="dropdown-item lang" onClick={() => changeLanguage('fi')}>Suomi</button></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
