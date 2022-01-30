import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "./css/Events.css";
function Events({category, sub_category, tag}) {
    const [event, setEvent] = useState();
    const [page, setPage] = useState(0);
    const max_perpage = 8;
    var max_page=10;
    const tags = tag.join(",");
    console.log(tags);
    const api = `https://api.codingninjas.com/api/v3/events?event_category=${category}&event_sub_category=${sub_category}&tag_list=${tags}&offset=0`;
    useEffect(()=>{
        fetch(api).then((res) => res.json())
                .then((json) => {
                    setEvent(json?.data?.events);
                })
    },[category,sub_category,tag]);
    const useStyles = makeStyles((theme) =>({
        root: {
            '& .Mui-selected': {
              backgroundColor: 'red',
              color:'white',
              "&:hover": {
                backgroundColor: "red",
              },
             },
        }}),
      );
        const classes = useStyles();
    var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
    const timeFormat = (timestamp) => {
        let date = new Date(timestamp*1000);
        var hr = date.getHours();
        var min = date.getMinutes();
        var timez = "AM";
        if(hr>12){
            hr=hr-12;
            timez="PM";
        }
        if(hr===0) hr=hr+12;
        var formattedDate = hr+":"+min+" "+timez+", "+date.getDate()+" "+monthname[date.getMonth()]+" "+date.getFullYear();
        return formattedDate;
    }
  return (
      <>
      {console.log(event?.length)}
      <div className='contain'>
        {event?event.slice(page*max_perpage,page*max_perpage+max_perpage).map((ev) => {
            return (
                <>
                <div className='eventBox'>
                    <div className='imageBox'><img src={ev.cover_picture} alt="" className='image'></img></div>
                    <div className='details'>
                        <h4>{ev.name}</h4><br></br>
                        <div className='otherDetails'>
                            <div>
                                <span className='_h4'>Starts on</span><br></br>
                                <span>{timeFormat(ev.registration_start_time)}</span>
                            </div>
                            <div>
                                <span className='_h4'>Entry Fee</span><br></br><span>{ev.fees==0?"Free":ev.fees}</span>
                            </div>
                            <div>
                                <span className='_h4'>Venue</span><br></br><span>{ev.venue}</span>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='description'>{ev.short_desc}</div>
                    </div>
                    <div className='footer'>
                        <div className='other_users'>
                        {ev.registered_users?.show_users_count===true && 
                            <>
                            {ev.registered_users.top_users.map((user) => {
                                return(
                                        <span><img src={user.image_url} className='icon'></img></span>
                                )})
                            }
                            <br></br>
                            <span className='_h4'>and 10 others are participating</span>
                            </>
                        }
                        </div>
                        <div className='button'>
                            <button className='register'>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
                </>
            );
        }):<div></div>}
        </div>
        <div className='pagination'><Pagination
          count={event?Math.ceil(event.length/max_perpage): 10}
          className={classes.root}
          onChange={(onClick, page) => setPage(page-1)}
        /></div>
      </>
  );
}

export default Events;
