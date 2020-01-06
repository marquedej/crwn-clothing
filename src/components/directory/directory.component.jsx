import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import SectionData from './directory.data';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: SectionData
        }
    }

    render() {
        return (
        <div className='directory-menu'>
            {/*
            { this.state.sections.map( ({title, imageUrl, id, size, linkUrl }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
            ))}
            */}
            { this.state.sections.map( ({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
        );
    };
};

export default Directory;