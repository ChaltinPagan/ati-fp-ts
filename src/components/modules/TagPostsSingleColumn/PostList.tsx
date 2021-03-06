import { Post } from '@/components/modules/';
import { PostType } from '@/types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

interface Props {
  posts: PostType[];
}

class PostList extends PureComponent<Props> {
  public render() {
    const { posts } = this.props;

    return posts.map((post: PostType, index: number) => (
      <View key={post.id} style={index === 0 ? {} : { marginTop: 25 }}>
        <Post layoutVariant="medium" {...post} />
      </View>
    ));
  }
}

export default PostList;
