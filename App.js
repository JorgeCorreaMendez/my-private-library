import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import ListItems from "./components/ListItems";
import ModalAddData from "./components/ModalAddData";
import ModalErrorInput from "./components/ModalErrorInput";

export default function App() {
  const [library, setLibrary] = useState([]);
  const [showModalAddData, setShowModalAddData] = useState(false);
  const [showErrorInputModal, setShowErrorInputModal] = useState(false);

  const addBookHandler = (book) => {
    if (
      book.title !== "" &&
      (parseInt(book.readingPercentage) <= 100 || book.readingPercentage === "")
    ) {
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
      console.log(book);
    } else {
      setShowErrorInputModal(true);
    }

    setShowModalAddData(false);
  };

  return (
    <View style={styles.container}>
      <ListItems list={library} />
      <ModalAddData
        showModal={showModalAddData}
        closeModal={() => setShowModalAddData(false)}
        addItem={addBookHandler}
      />
      <ModalErrorInput
        showError={showErrorInputModal}
        closeError={() => setShowErrorInputModal(false)}
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
    height: "100%",
    backgroundColor: "#B4BEC4",
  },
  containerButton: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  button: {
    color: "white",
    backgroundColor: "black",
  },
});
