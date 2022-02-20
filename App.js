import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import Item from "./components/Item";
import ModalAddData from "./components/ModalAddData";

export default function App() {
  const [library, setLibrary] = useState([]);
  const [showModalAddData, setShowModalAddData] = useState(false);

  const addBookHandler = (book) => {
    if (book.title !== "" || parseInt(book.readingPercentage) <= 100) {
      setLibrary((currentLibrary) => [
        ...currentLibrary,
        {
          key: Math.random().toString(),
          title: book.title,
          description: book.bookDescription,
          readingPercentage: book.readingPercentage,
          coverPage: book.coverPage,
        },
      ]);
      console.log(book)
    } else {
      //No se han introducido datos correctamente
    }

    setShowModalAddData(false)
  };

  return (
    <View style={styles.container}>
      <Item />
      <ModalAddData
        showModal={showModalAddData}
        closeModal={() => setShowModalAddData(false)}
        addItem={addBookHandler}
      />
      <View style={styles.containerButton}>
        <FAB
          style={styles.button}
          icon="plus"
          onPress={() => setShowModalAddData(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B4BEC4",
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    marginTop: "10%",
    justifyContent: "flex-end",
  },
  button: {
    color: "white",
    backgroundColor: "black",
  },
});
