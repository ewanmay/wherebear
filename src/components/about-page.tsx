import * as React from 'react';
import PhotoCarousel from './photo-carousel';
import AboutText from './about-text';

class AboutPage extends React.Component<{}, {}> {
    render() {
        return (
            <div className="about-page col-md-12 col-lg-12 col-sm-12">
                <div className="photo-carousel col-md-8 col-lg-8 col-sm-8">
                    <h1 className="about-header">
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

export default AboutPage;