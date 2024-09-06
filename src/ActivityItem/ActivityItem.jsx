/* eslint-disable react/prop-types */
import './ActivityItem.css'
import ellipsis from '/assets/icon-ellipsis.svg'
function ActivityItem(props){
    return(
    <div className='ActivityItem'style={{backgroundColor:props.color,backgroundImage:`url(${props.img})`}}>
      <div className="details" >
        <div className="title">
        <label  id="activity">{props.ActivityName}</label>
        <img src={ellipsis} className="ell" />
        </div>
        <div className='duration'>
        <label id="duration">{props.duration}</label>
        <label id="tim">{props.time}</label>
        </div>
        
      </div>
    </div>)
}
export default ActivityItem