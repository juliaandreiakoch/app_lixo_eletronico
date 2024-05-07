import { View } from "react-native";

export function FeedData({ Post, postList, navigation }) {
  return (
    <View id="feed">
      {postList.map((post, index) => (
        <Post key={index} user={post.user} image={post.image} secondImage={post.secondImage} thirdImage={post.thirdImage} fourthImage={post.fourthImage} description={post.description} category={post.category} navigation={navigation}/>
      ))}
    </View>
  );
}