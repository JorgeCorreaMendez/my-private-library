import { FlatList, Text, View, StyleSheet } from "react-native";
import Item from "./Item";

const ListItems = ({ list, onEdit }) => {
  return (
    <View style={styles.listContainer}>
      {list && list.length ? (
        <FlatList
          data={list}
          horizontal
          pagingEnabled
          renderItem={(itemData) => {
            return <Item itemData={itemData.item} onEdit={onEdit}/>;
          }}
        />
      ) : (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>Lista Vacia</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: "15%",
    alignContent: "space-between",
  },

  emptyListContainer: {
    width: "100%",
    height: "90%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 30,
  },
});

export default ListItems;
