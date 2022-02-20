import { Image, View, Text, StyleSheet } from "react-native";

const Item = () => {
  return (
    <View style={styles.containerItem}>
      <Image
        style={styles.imagen}
        source={require("../assets/img/noImage.jpg")}
      />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Title</Text>
      </View>
      <View style={styles.containerData}>
        <Text style={{ color: "white" }}>Esto es una descripcion</Text>
        <View style={styles.containerCircle}>
          <Text style={styles.circle}>100%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "black",
    color: "white",
    width: "80%",
    height: "80%",
    maxHeight: "75%",
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 2,
  },
  imagen: {
    height: "75%",
    width: "100%",
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  containerTitle: {
    width: "100%",
    height: "7%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  containerData: {
    paddingTop: 20,
    paddingLeft: 6,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerCircle: {
    backgroundColor: "#00821C",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "black",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Item;
