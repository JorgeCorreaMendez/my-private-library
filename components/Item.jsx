import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Item = ({ itemData, onEdit }) => {
  const { title, description, readingPercentage, coverPage } = itemData;

  return (
    <TouchableOpacity onPress={() => onEdit(itemData)}>
      <View style={styles.containerItem}>
        {coverPage != null ? (
          <Image style={styles.imagen} source={{ uri: coverPage }} />
        ) : (
          <Image
            style={styles.imagen}
            source={require("../assets/img/noImage.jpg")}
          />
        )}

        <View style={styles.containerTitle}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>

        <View style={styles.containerData}>
          {description != "" ? (
            <Text style={styles.description} numberOfLines={5}>
              {description}
            </Text>
          ) : (
            <Text style={{ color: "white" }}>Sin descripción</Text>
          )}

          <View style={styles.containerCircle}>
            {readingPercentage != "" ? (
              <Text style={styles.circle}>{readingPercentage}%</Text>
            ) : (
              <Text style={styles.circle}>0%</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "black",
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 2,
    marginHorizontal: 8,
    height: "90%",
    width: 340,
  },
  imagen: {
    height: "75%",
    maxWidth: "100%",
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
    width: "100%",
    fontSize: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  description: {
    color: "white",
    width: "70%",
    paddingLeft: "5%",
    fontSize: 15,
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
