import React, { useState } from 'react'
import './PortfolioPage.css'
import { Sidebar } from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { PortfolioData } from './PortfolioData'

const PortfolioPage = () => {
    const [switchTab, setSwitchTab] = useState("All");
    const navigate = useNavigate();

    const filteredItems = switchTab === "All"
        ? PortfolioData
        : PortfolioData.filter((item) => item.tabName === switchTab);

    return (
        <div className="portfolio">
            <div className="pPortfolio">
                <h1 className='pHeading'>Portfolio</h1>
                <div className="icon">
                    <Sidebar />
                </div>
            </div>

            <div className="pContent">
                <ul>
                    <li>
                        <a className={switchTab === "All" ? "btn" : ""} onClick={() => setSwitchTab("All")}>All</a>
                    </li>
                    <li>
                        <a className={switchTab === "App" ? "btn" : ""} onClick={() => setSwitchTab("App")}>Apps</a>
                    </li>
                    <li>
                        <a className={switchTab === "Website" ? "btn" : ""} onClick={() => setSwitchTab("Website")}>Website</a>
                    </li>
                </ul>

                <div className="pMainCard">
                    {filteredItems.map((elem) => {
                        const firstImage = elem.img.find(item => item.type === 'image');

                        return (
                            <div key={elem.id} className="card">
                                <div className="pCard">
                                    {firstImage ? (
                                        <img
                                            src={firstImage.src}
                                            alt={elem.title}
                                            onClick={() => navigate(`/PortfolioDetail/${elem.id}`)}
                                        />
                                    ) : (
                                        <p>No image available</p>
                                    )}
                                </div>
                                <div className="pContent">
                                    <h2>{elem.title}</h2>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export default PortfolioPage;
