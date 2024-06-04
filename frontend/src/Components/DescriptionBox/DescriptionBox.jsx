import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus tempora corporis magnam iusto voluptate culpa dolorum expedita facere exercitationem qui neque facilis sapiente quasi quaerat molestiae, sint vitae id pariatur!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta corporis, veritatis ipsam adipisci nostrum itaque accusamus, iusto officiis amet quia eius inventore impedit consequatur. Natus molestiae esse mollitia laudantium quas.</p>
        </div>
    </div>

  )
}
