import { useRoute } from "@react-navigation/native";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
const LesDetails = () => {

  const route = useRoute();
  if (route.params) {
    const film = {
      title: route.params.title,
      resume: route.params.resume,
      comment: route.params.comment,
      image: route.params.image,
      rating: route.params.rating
    }
    return (
      <View>
        <ScrollView style={styles.bgDark}>
          <View>
            <View>
              <Text style={styles.lesDetailsBody}> {film.title}</Text>
            </View>
            <View>
              <Image style={styles.image} resizeMode="center" source={film.image != "" && film.image != null && film.image != undefined ? { uri: film.image } : require("../assets/SpiderMan.jpg")}></Image>
            </View>
            <View>
              <Text style={styles.lesDetailsBody}> {film.resume}</Text>
            </View>
            <View>
              <Text style={styles.lesDetailsBody}> {film.comment}</Text>
            </View>
            <View>
              <Text style={styles.lesDetailsBody}> {film.rating} / 20</Text>
            </View>
          </View>
        </ScrollView>


      </View>


    );
  } else {
    return (
      <View>
        <Text>Sélectionnez un film dans la liste</Text>
      </View>
    )
  }

};

const styles = StyleSheet.create({
  field: {
    height: 56,
    borderRadius: 4,
    position: "relative",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderColor: "#D3D3D3",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 20

  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 30,
    margin: 5,
    alignContent: "center"
  },
  lesDetailsBody: {
    textAlign: "center", fontSize: 30, padding: 20
  },
  bgDark: {
    backgroundColor: "#D3D3D3",
  },

});


export default LesDetails