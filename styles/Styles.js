import { Dimensions, StyleSheet } from "react-native";
import Constants from "../constants/constants.js";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: Constants.baseColor,
    height: deviceHeight,
  },
  trendingPeopleImage: {
    height: 70,
    width: 70,
    borderRadius: 500,
  },
  trendingPeopleName: {
    width: 60,
    color: Constants.textColor,
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
  },
  trendingPeopleContainer: {
    margin: 10,
  },
  heading: {
    fontSize: 19,
    color: Constants.fadedColor,
    margin: 10,
  },
  posterImage: {
    height: 250,
    width: 150,
    borderRadius: 10,
  },
  movieTitle: {
    color: Constants.textColor,
    width: 150,
    textAlign: "center",
    marginTop: 5,
    fontSize: 16,
  },
  imageBg: {
    width: deviceWidth,
    height: 250,
  },
  detailsMovieTitle: {
    fontSize: 28,
    color: Constants.textColor,
    textAlign: "center",
    marginTop: -40,
  },
  linkContainer: {
    backgroundColor: Constants.secondaryColor,
    borderRadius: 100,
    padding: 10,
    width: 45,
    marginLeft: 20,
    marginTop: -20,
  },
  overview: {
    color: Constants.textColor,
    marginHorizontal: 10,
    fontSize: 16,
    letterSpacing: 1.2,
  },
  details: {
    color: Constants.secondaryColor,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "bold",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Constants.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  genre: {
    color: Constants.textColor,
    fontSize: 16,
  },
  arrowBack: {
    position: "absolute",
    borderRadius: 100,
    color: "white",
    zIndex: 10,
    top: 40,
    marginLeft: 10,
  },
  likeButton: {
    position: "absolute",
    top: 260,
    left: deviceWidth - 45,
    zIndex: 99,
  },
  movieContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Constants.fadedColor,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  favMovieTitle: {
    color: Constants.textColor,
    fontSize: 16,
  },
  posterImageFavList: {
    height: 120,
    width: 72,
    borderRadius: 10,
    marginLeft: 5,
  },
  descMovieContainer: {
    width: 220,
    marginLeft: 30,
  },
  favMovieDate: {
    color: Constants.fadedColor,
  },
  drawerList: {
    color: Constants.textColor,
  },
  logOut: {
    textAlign: "center",
    color: Constants.fadedColor,
    padding: 10,
    paddingLeft: 20,
    fontSize: 16,
    borderTopWidth: 1,

    borderColor: Constants.fadedColor,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logOutText: {
    fontSize: 16,
    marginLeft: 10,
    color: Constants.textColor,
  },
  headingDrawer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    width: "86%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#fff",
    color: "#fff",
  },
  avatar: {
    height: 150,
    minWidth: 150,
    resizeMode: "cover",
    borderWidth: 5,
    borderRadius: 100,
    borderColor: "#000",
  },
  avatarContainer: {
    position: "absolute",
    top: 150,
    marginLeft: deviceWidth / 2 - 75,
    zIndex: 100,
  },
  profileContainer: {
    width: deviceWidth,
    backgroundColor: "#040712",
    height: deviceHeight,
  },
  inputContainer: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    width: deviceWidth,
  },

  inputWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
  },
  label: {
    fontWeight: "bold",
    color: Constants.textColor,
    marginBottom: 5,
    width: 60,
  },

  input: {
    fontSize: 16,
    backgroundColor: "transparent",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginLeft: 10,
    width: 250,
    borderBottomColor: "#ccc",
    borderWidth: 1,
    color: Constants.textColor,
  },
  name: {
    color: Constants.textColor,
    fontWeight: 700,
    fontSize: 26,
    textAlign: "center",
    marginTop: 50,
  },
  headingStack: {
    fontSize: 24,
    color: Constants.textColor,
    marginTop: 50,
    textAlign: "center",
    fontFamily: "Arial",
    fontWeight: "800",
  },
});

export default Styles;
