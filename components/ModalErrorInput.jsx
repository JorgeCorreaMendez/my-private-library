import { StyleSheet, View, Modal, Text, TouchableOpacity } from "react-native";

const ErrorInput = ({ showError, closeError }) => {
  return (
    <Modal visible={showError} animationType="fade" transparent={true}>
      <TouchableOpacity
        style={styles.errorContainer}
        onPress={() => closeError()}
      >
        <View style={styles.error}>
          <Text style={styles.errorTitle}>!Error!</Text>
          <Text style={styles.errorText}>
            Has introducido un valor incorrecto
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 20,
  },
  error: {
    padding: 40,
    backgroundColor: "red",
    color: "white",
    width: "70%",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 5,
  },
  errorTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    borderBottomColor: "black",
    borderBottomWidth: 22,
  },
  buttonStyle: {
    borderColor: "black",
    borderWidth: 15,
  },
  errorText: {
    color: "white",
    fontSize: 20,
  },
});

export default ErrorInput;