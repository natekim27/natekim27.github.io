// import "./index.scss"
import React from "react";
import { Link, NavLink } from "react-router-dom";

function WorkCard(props) {
    return (
      <>
        <li className='card_item'>
          <Link className='card_item_link' to={props.path}>
            <figure className='card_item_pic-wrap' data-category={props.label}>
              <img
                className='card_item_img'
                alt='Travel Image'
                src={props.src}
              />
            </figure>
            <div className='card_item_info'>
              <h5 className='card_item_text'>{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
  }
  
export default WorkCard;

// const WorkCard = ({title, imageUrl, body}) => {
//     return (
//         <div className="card-container">
//             <div className="img-container">
//                 <img src={imageUrl} alt='' />
//             </div>
//             <div className="card-content">
//                 <div className="card-title">
//                     <h3>{title}</h3>
//                 </div>
//                 <div className="card-body">
//                     <p>{body}</p>
//                 </div>
//             </div>
            
//             <div className="btn">
//                 <button>
//                     <a>
//                         View
//                     </a>
//                 </button>
//             </div>
//         </div>
//     )
//  }

//  export default WorkCard;