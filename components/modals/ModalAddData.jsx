import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from "expo-image-picker";
import { FAB } from "react-native-paper";

const ModalAddData = ({ showModal, closeModal, addItem }) => {
  const [title, setTitle] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [readingPercentage, setReadingPercentage] = useState("");
  const [coverPage, setCoverPage] = useState(null);

  const titleHandler = (inputText) => {
    setTitle(inputText);
  };

  const bookDescriptionHandler = (inputText) => {
    setBookDescription(inputText);
  };

  const percentageReadHandler = (inputText) => {
    setReadingPercentage(inputText);
  };

  const validateBook = () => {
    addItem({
      title,
      bookDescription,
      readingPercentage,
      coverPage,
    });

    setTitle("");
    setBookDescription("");
    setReadingPercentage("");
    setCoverPage(null);
  };

  const pickImageGalery = async () => {
    const imageResult = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
    });

    if (!imageResult.cancelled) {
      setCoverPage(imageResult.uri);
    }
  };

  const pickImageCamara = async () => {
    const imageResult = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.Images,
    });

    if (!imageResult.cancelled) {
      setCoverPage(imageResult.uri);
    }
  };
  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <View style={styles.containerModal}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Nuevo Libro</Text>
          <TextInput
            value={title}
            onChangeText={titleHandler}
            style={{ paddingTop: 10 }}
            placeholder="Titulo del libro*"
          />
          <TextInput
            value={bookDescription}
            onChangeText={bookDescriptionHandler}
            style={{ paddingTop: 10 }}
            placeholder="Descripción del libro"
          />
          <View style={styles.columnInput}>
            <Text>Porcentaje leido: </Text>
            <TextInput
              value={readingPercentage}
              onChangeText={percentageReadHandler}
              placeholder="0-100"
              keyboardType="number-pad"
              maxLength={3}
            />
          </View>

          {coverPage == null ? (
            <View>
              <View style={styles.columnInput}>
                <Text>Sube una imagen</Text>
              </View>
              <View style={styles.columnInput}>
                <FAB icon="camera" onPress={() => pickImageCamara()} />
                <FAB icon="image" onPress={() => pickImageGalery()} />
              </View>
            </View>
          ) : (
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => setCoverPage(null)}
            >
              <Image style={styles.previewImg} source={{ uri: coverPage }} />
            </TouchableOpacity>
          )}

          <View style={styles.columnInput}>
            <Button title="Añadir" onPress={() => validateBook()} />
            <Button title="Cancelar" onPress={() => closeModal()} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#E5F1F7",
    width: "80%",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  columnInput: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  previewImg: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
});

export default ModalAddData;
