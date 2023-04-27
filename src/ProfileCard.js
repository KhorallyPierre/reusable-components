import React from 'react';
function ProfileCard({ title, handle, image }) {

    // statement below is the same as:
    // const title = props.title
    // const handle= props.handle 
    // it's a simpler way of declaring the props that are about to be passed in to the children
    // const {title, handle} = props
    // further simplified: title and handle are passed in directly as props. known as a destructuring feature
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is -4"> {title}</p>
                    <p className="subtitle is-6"> {handle}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard

