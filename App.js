import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import ListItems from "./components/ListItems";
import ModalAddData from "./components/modals/ModalAddData";
import ModalEditData from "./components/modals/ModalEditData";
import ModalErrorInput from "./components/modals/ModalErrorInput";

export default function App() {
  const [library, setLibrary] = useState([]);
  const [userEdit, setUserEdit] = useState({});
  const [showModalAddData, setShowModalAddData] = useState(false);
  const [showModalEditData, setShowModalEditData] = useState(false);
  const [showModalErrorInput, setShowModalErrorInput] = useState(false);

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
    } else {
      setShowModalErrorInput(true);
    }

    setShowModalAddData(false);
  };

  const onEdit = (book) => {
    setUserEdit(book);
    setShowModalEditData(true);
  };

  const editBookHandler = (book) => {
    setShowModalEditData(false);
  };

  const deleteBookHandler = (key) => {
    setLibrary((currentLibrary) => {
      return currentLibrary.filter((book) => book.key != key);
    });

    setShowModalEditData(false);
  };

  return (
    <View style={styles.container}>
      <ListItems list={library} onEdit={onEdit} />
      <ModalAddData
        showModal={showModalAddData}
        closeModal={() => setShowModalAddData(false)}
        addItem={addBookHandler}
      />
      <ModalEditData
        showModal={showModalEditData}
        closeModal={() => setShowModalEditData(false)}
        bookEdit={userEdit}
        editItem={editBookHandler}
        deleteItem={deleteBookHandler}
      />

      <ModalErrorInput
        showError={showModalErrorInput}
        closeError={() => setShowModalErrorInput(false)}
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
