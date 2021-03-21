import MenuItem from '../menu-item/menu-item.component';
import React, { Component } from 'react';
import data from './directory.data';
import './directory.styles.scss';
// Short hand for component directory ;)
class CD extends Component {

    constructor() {
        super();
        this.state = {
            sections: data
        }
    }

    

    render() {
        
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, imageUrl, id, linkUrl, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} size={size} />
                ))}
            </div>
        )
    }
}

export default CD;