import React from 'react'
import './NewsScroller.css'
import intel471data from "../../highbreachAlerts.json"
function NewsScroller() {

  
  return (
    <div class="fixed-bottom mt-5" style={{position: "fixed"}}>
        
        <div id="tickr-box" style={{background: "#A7BFE8"}}>
                <div className="tickr-title" style={{background: "linear-gradient(141deg, #040408 0%, #186e6e 51%, #198282 75%)"}}>{"Breach Alerts:"}</div>
                <div id="tickr-scroll">
                
                    <ul>

                        { 
                            intel471data.map((newsListItem, newsListItemKey) => {
                                if (newsListItem.link.length !== 0) {
                                    
                                    return (

                                        <li key={newsListItemKey}><a href={newsListItem.link}>{newsListItem.text || ""}</a></li>
                                    )

                                } else {
                                    return (

                                        <li key={newsListItemKey}>{newsListItem.text || ""}</li>
                                    )

                                }


                            })
                        }


                    </ul>
                </div>
            </div>
    </div>
    
  )
}

export default NewsScroller