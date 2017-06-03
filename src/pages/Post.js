import React from 'react';

const Post = ({match, location}) => {
    return (
        <div>
            Post #{match.params.id}
        </div>
    );
};

export default Post;