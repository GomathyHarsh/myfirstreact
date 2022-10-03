import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 import {faCheck} from '@fortawesome/free-solid-svg-icons'
 import {faXmark} from '@fortawesome/free-solid-svg-icons'
function Card(props){
    return (
        <div className="col">
             <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h6 className="my-0 fw-normal text-muted">{props.card.planName}</h6>
            <h1 className="card-title pricing-card-title">${props.card.price}<span><small className="mn">/month</small></span></h1>
          </div>
          <div className="card-body">
           
            <ul className="list-unstyled mt-3 mb-4">
              {
                props.card.features.map((item)=>{
                  return item.isEnabled ? <li><FontAwesomeIcon icon={faCheck} />{item.name}</li> :<li className="text-muted"><FontAwesomeIcon icon={faXmark} />{item.name}</li>
                })
              }
            </ul>
            <button type="button" className="btn btn-sm btn-block btn-primary">BUTTON</button>
          </div>
        </div>
        </div>
    );



   
}
export default Card;