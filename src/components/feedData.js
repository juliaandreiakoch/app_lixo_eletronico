import { View } from "react-native";

export function FeedData({ Post, postList }) {
  return (
    <View id="feed">
      {postList.map((post, index) => (
        <Post key={index} usuario={post.usuario} imagem={post.imagem} descricao={post.descricao} category={post.category}/>
      ))}
    </View>
  );
}