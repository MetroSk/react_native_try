import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  categoryText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    marginTop: SIZES.small,
  },
  tabImage: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    marginRight: 90
    , // Adjust the margin as needed
    categoryImage:{
      width: 30, // Adjust the width as needed
      height: 30, // Adjust the height as needed
      marginRight: 40,
    },
  },
  tabsContainer: {
    flexDirection: 'row', // Ensure buttons are side by side
    marginTop: SIZES.medium,
  },
  locationPicker: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    marginTop: SIZES.small,
    paddingHorizontal: SIZES.medium,
  },

  locationPickerItem: {
    textAlign: 'center', // Center the text horizontally
  },
  tab: (active, item) => ({
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small / 2,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: active ? COLORS.secondary : COLORS.gray2,
    marginRight: SIZES.medium, // Adjust the margin to create space between buttons
  }),

  tabText: (active) => ({
    fontFamily: FONT.medium,
    color: active ? COLORS.secondary : COLORS.black,
  }),
});

export default styles;
