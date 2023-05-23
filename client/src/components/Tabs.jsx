import React from "react";

import { TABS } from "../redux/actions/type";

import { useDispatch } from "react-redux";

import { toggleTab } from "../redux/actions";

const Tabs = ({ currentTab }) => {

    const dispatch = useDispatch();

    return(
        <div>
            {TABS.map((tab) => {
                return  <button key={tab}
                    className = {tab === currentTab ? 'button selected' : 'button'}
                    onClick={() => dispatch(toggleTab(tab))}
                >{tab}
                </button>
        })}
        </div>
    )
}

export default Tabs;