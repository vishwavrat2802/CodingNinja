import React, { useEffect, useState } from 'react';
import {EventsList, sub_Events} from "./EventType";
import Icon from '@mui/material/Icon';
import NavBar from "./NavBar";
import Events from './Events';
import "./css/OuterBox.css";

function OuterBox() {
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState("ALL_EVENTS");
    const [sub_Category, setSub_Category] = useState("Upcoming");
    const [tag, setTag] = useState([]);
    const events = ["ALL_EVENTS", "WEBINAR", "CODING_EVENT", "BOOTCAMP_EVENT", "WORKSHOP"];
    useEffect(()=>{
        fetch(
            "https://api.codingninjas.com/api/v3/event_tags")
                        .then((res) => res.json())
                        .then((json) => {
                            setTags(json?.data?.tags);
                        })
    },[]);
    const changeCategory = (index) => {
        setCategory(events[index]);
        setSub_Category("Upcoming");
        setTag([]);
    }
  return (
        <>
            <NavBar/>
            <div className='head'>
            <h1>Events & News</h1>
            <h2>Learn, Compete & Grow</h2>
            </div>
            <div className="box">
                <div className='category'>
                    {EventsList.map((ev,key) => {
                        return (
                            <div className={'options_c ' + (ev.api==category? "active_c":"")} onClick={() => changeCategory(key)}>
                                <span className='material_icon'>{ev.icon}</span>
                                {ev.name}
                            </div>
                        );
                    })}
                </div>
                <div className='sub-category'>
                    {sub_Events.map((ev)=> {
                        return (
                            <div className={'options ' + (ev==sub_Category? "active":"")} onClick={() => setSub_Category(ev)}>{ev}</div>
                        );
                    })}
                </div>
                <div className='content'>
                    <div className='events'><Events category={category} sub_category={sub_Category} tag={tag} /></div>
                    <div className='tags'>
                    <h4>TAGS</h4>
                        <ul>{tags.map((tg) => <li onClick={() => setTag([...tag, tg])} 
                                                className={tag.find((curr)=> curr===tg)?"active_tag":""}>
                                                {tg}
                                                </li>)}</ul>
                    </div>
                </div>
            </div>
        </>
  );
}

export default OuterBox;
