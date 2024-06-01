import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const Pill = ({ pill, selected, setSelected }: any) => {
  const handlePress = () => {
    setSelected(pill?.idx);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={selected === pill?.idx ? styles.selectedPill : styles.pill}
    >
      <Text
        style={
          selected === pill?.idx ? styles.selectedPillText : styles.pillText
        }
      >
        {pill?.title}
      </Text>
    </TouchableOpacity>
  );
};
interface PillRowProps {
  pills: Array<any>;
  children: React.ReactNode;
}

const PillRow = ({ pills, children }: PillRowProps) => {
  const [selected, setSelected] = React.useState(0);

  return (
    <View>
      <View style={styles.row}>
        {pills.map((pill, idx) => (
          <Pill
            pill={{ ...pill, idx: idx }}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </View>
      {children}
    </View>
  );
};

export default PillRow;

const styles = StyleSheet.create({
  pill: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginRight: 12,
    color: "black",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  pillText: {
    fontSize: 18,
    color: "black",
  },
  selectedPill: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginRight: 12,
    color: "white",
    padding: 9,
    backgroundColor: "black",
    borderRadius: 20,
  },
  selectedPillText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  row: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    overflow: "scroll",
    marginTop: 20,
    paddingBottom: 10,
  },
  text: {
    fontSize: 14,
  },
});
