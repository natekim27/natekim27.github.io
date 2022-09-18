import React from "react";
import { Link, NavLink } from "react-router-dom";

function WorkCard(props) {
    return (
      <>
        <li className='card_item'>
          <a className='card_item_link' href={props.path}>
            <figure className='card_item_pic-wrap' data-category={props.label}>
              <img
                className='card_item_img'
                alt=''
                src={props.src}
              />
            </figure>
            <div className='card_item_info'>
              <h5 className='card_item_text'>{props.text}</h5>
            </div>
          </a>
        </li>
      </>
    );
  }
  
export default WorkCard;