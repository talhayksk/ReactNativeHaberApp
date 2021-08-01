import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import news_data from "./src/news_data.json";
import news_banner_data from "./src/news_banner_data.json";
import NewsCard from "./src/components/NewsCard";
export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}> Haber App <Text style={{fontSize:10,fontWeight:"normal"}}>ensonhaber.com</Text></Text>
      <FlatList
        data={news_data}
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map((bannerNews) => (
              <Image
                style={styles.banner_image}
                source={{ uri: bannerNews.imageUrl }}
              />
            ))}
          </ScrollView>
        )}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },
  headerText:{
    backgroundColor: "#fff",
    fontSize:25,
    fontWeight:"bold",
    
  },
  banner_image: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width / 1,
  },
});
