import React from "react";
import { View, ScrollView, SafeAreaView, FlatList } from "react-native";
import { Title, DiscoverGrid } from "./style";

import FeedIconContainer from "../FeedIcon/FeedIconContainer";
export default ({ feeds, handleStory, grid }) => {
  return (
    <View>
      <Title>Discover</Title>
      <ScrollView>
        <SafeAreaView>
          <DiscoverGrid
            numColumns={grid}
            data={feeds}
            keyExtractor={item => item.id}
            renderItem={feed => {
              return (
                <FeedIconContainer
                  disableTick={true}
                  feed={feed.item}
                  handleStory={handleStory}
                  section={"discover"}
                />
              );
            }}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};