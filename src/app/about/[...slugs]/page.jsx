import React from 'react';

const AboutPagesSlugs = async ({params}) => {

    const p = await params
    console.log(p);

    return (
        <div>
            About Slugs Pages
        </div>
    );
};

export default AboutPagesSlugs;