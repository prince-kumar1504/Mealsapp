import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <>
            <section className='main-card-container'>
                {menuData.map((curElem) => {
                    // destructring of the object 
                    const { id,name, category, image, description } = curElem;
                    return (
                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    <span className="card-author subtle">{category}</span>
                                    <span className="card-title">{name}</span>
                                    <span className="card-author subtle">
                                    {description}                                    
                                    </span>
                                    <div className="card-read">Read</div>
                                    <img src={image} alt="images" className="card-media" />

                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default MenuCard