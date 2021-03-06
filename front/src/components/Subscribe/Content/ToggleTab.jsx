import React, { Component, useState } from "react";
import { TabContainer, Separator, ToggleSeparator } from "./style";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import {
  BACKGROUND,
  INACTIVE_TAB_COLOR,
  TEXT,
  LINE_COLOR,
} from "../../../styles";
import styles from "./style";

const Header = (props) => {
  const {
    navigationState,
    navigation,
    activeTintColor,
    inactiveTintColor,
  } = props;
  const activeTabIndex = navigation.state.index;
  const [toggle, setToggle] = useState(true);

  return (
    <View style={{ backgroundColor: BACKGROUND }}>
      <styles.TabContainer>
        {navigationState.routes.map((route, index) => {
          const isRouteActive = index === activeTabIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

          return (
            <TouchableWithoutFeedback
              onPress={() => {
                setToggle(!toggle);
                navigation.navigate(route.routeName);
              }}
              key={route.routeName}
            >
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: `${isRouteActive ? TEXT : INACTIVE_TAB_COLOR}`,
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}
                >
                  {route.routeName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </styles.TabContainer>
      <styles.Separator>
        <styles.ToggleSeparator show={toggle} />
        <styles.ToggleSeparator show={!toggle} />
      </styles.Separator>
    </View>
  );
};
export default Header;
