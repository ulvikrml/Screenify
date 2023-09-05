import React, { useState } from 'react'
import "./style.scss"

const SwitchTabs = ({ tabs, onChangeTab }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [left, setLeft] = useState(0);

    const activeTab = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
        onChangeTab(tab);
    };
    return (
        <div className='switch'>
            <div className="tabItems">
                {tabs.map((tab,index) => (
                    <span key={crypto.randomUUID()} className={`tabItem ${selectedTab === index ? 'active' : ''}`} onClick={()=>activeTab(tab,index)}>
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{ left }} />
            </div>
        </div>
    )
}

export default SwitchTabs