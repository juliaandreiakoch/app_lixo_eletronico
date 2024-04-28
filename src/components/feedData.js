import { View } from "react-native";

export function FeedData({ Post, postList }) {
  return (
    <View id="feed">
      {postList.map((post, index) => (
        <Post key={index} user={post.user} image={post.image} description={post.description} category={post.category}/>
      ))}
    </View>
  );
}