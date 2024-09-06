import './Activities.css'
import ActivityItem from '../ActivityItem/ActivityItem'
import work from '../assets/icon-work.svg'
import play from '../assets/icon-play.svg'
import study from '../assets/icon-study.svg'
import exercise from '../assets/icon-exercise.svg'
import social from '../assets/icon-social.svg'
import selfcare from '../assets/icon-self-care.svg'

function Activities(){
    const arrayofObjects=[
        {
            uniqueId:1,
            ActivityName:"Work",
            duration:"32hrs",
            time:"LastWeek-36hrs",
            color:"hsl(15, 100%, 70%)",
            img:work
        },{
            uniqueId:2,
            ActivityName:"Play",
            duration:"10hrs",
            time:"LastWeek-8hrs",
            color:"hsl(195, 74%, 62%)",
            img:play
        },{
            uniqueId:3,
            ActivityName:"Study",
            duration:"4hrs",
            time:"LastWeek-7hrs",
            color:"hsl(348, 100%, 68%)",
            img:study
        }
        ,{
            uniqueId:4,
            ActivityName:"Exercise",
            duration:"4hrs",
            time:"LastWeek-5hrs",
            color:"hsl(145, 58%, 55%)",
            img:exercise
        },{
            uniqueId:5,
            ActivityName:"Social",
            duration:"5hrs",
            time:"LastWeek-10hrs",
            color:"hsl(264, 64%, 52%)",
            img:social
        },{
            uniqueId:6,
            ActivityName:"Self Care",
            duration:"2hrs",
            time:"LastWeek-2hrs",
            color:"hsl(43, 84%, 65%)",
            img:selfcare
        }
    ]
    return(
        <div id="Activities">
        {arrayofObjects.map((item)=>{
            return(
                <ActivityItem
                key={item.uniqueId}
                ActivityName={item.ActivityName}
                duration={item.duration}
                time={item.time}
                color={item.color}
                img={item.img}
                ></ActivityItem>
            )
        })}
        </div>
    )
}

export default Activities