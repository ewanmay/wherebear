import * as React from 'react';
import PhotoCarousel from './photo-carousel';
import AboutText from './about-text';

class AboutPage extends React.Component<{}, {}> {
    render() {
        return (
            <div className='about-page'>
                <div className="col-md-1" />
                <div className='photo-carousel col-md-6 col-lg-6 col-sm-7'>
                    <h1>
                        Meet Bear, our doofus
                </h1>
                    <PhotoCarousel />
                </div>
                <div className="col-md-4" >
                    <AboutText />
                </div>
            </div>
        );
    }

}

export default AboutPage