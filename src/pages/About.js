import React from 'react';
import queryString from 'query-string';
import { Helmet } from 'react-helmet';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    
    const detail = query.detail === 'true';
    const { name } = match.params;

    return (
        <div>
            <Helmet>
                <title>{`About ${name ? name : ''}`}</title>
            </Helmet>
            <h2>About {name}</h2>
            {detail && 'detail: blahblah'}
        </div>
    );
};

export default About;