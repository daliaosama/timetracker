import './Person.css'
import jeremy from '/assets/image-jeremy.png'
function Person(){
    return(
        <div id="person">
            <div id="information">
                <img  src={jeremy}/>
                <div id="Info">
                    <label id="report">Report for</label>
                <div id="name">
                <label className="name">Jeremy</label>
                <label className="name">Robson</label>
                </div>
                
                </div>
              
            </div>
            <div id="time">
                <label className='time'>Daily</label>
                <label id="week">Weekly</label>
                <label className='time'>Monthly</label>
              </div>
        </div>
    )
}
export default Person