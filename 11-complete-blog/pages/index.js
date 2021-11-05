import { Fragment } from 'react';

import FeaturedPosts from '../components/featured-posts';
import Hero from '../components/hero';

export default function HomePage () {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts />
        </Fragment>
    )
}