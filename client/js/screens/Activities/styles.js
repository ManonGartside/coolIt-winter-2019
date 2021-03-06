import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  top: {
    marginBottom: 25
  },
  content: {
    marginBottom: 25
  },
  topBackground: {
    width: "100%"
  },
  impact: {
    width: "60%",
    alignSelf: "center",
    backgroundColor: colors.darkGreen,
    borderRadius: 20,
    marginBottom: 25,
    marginTop: 25,
    padding: 10
  },
  dateText: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: "Arial",
    fontSize: 16,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 10
  },
  headerText: {
    paddingTop: 25,
    marginTop: 25,
    paddingLeft: 25,
    paddingBottom: 25
  },
  headerWelcome: {
    paddingTop: 25,
    marginTop: 25,
    fontFamily: fonts.bold,
    fontSize: 18
  },
  headerAction: {
    fontFamily: fonts.light
  },
  section: {
    textTransform: "uppercase",
    fontFamily: fonts.light,
    fontSize: 16,
    paddingLeft: 10
  },
  title: {
    padding: 18,
    fontFamily: fonts.light,
    fontSize: 14
  },
  list: {
    backgroundColor: colors.lightGreen,
    opacity: 0.8,
    padding: 12,
    marginTop: 5
  },
  buttonContainer: {
    backgroundColor: colors.white,
    borderRadius: 13,
    borderColor: colors.green,
    borderWidth: 2,
    padding: 5,
    marginHorizontal: 10
  },
  topSection: {
    flexDirection: "row",
    paddingLeft: 25,
    alignItems: "flex-end"
  },
  pointDisplay: {
    fontSize: 16,
    fontFamily: fonts.light,
    fontWeight: "normal"
  }
});

export default styles;
