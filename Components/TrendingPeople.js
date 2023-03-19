import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { getTrendingPeople } from "../api/people";
import { IMAGE_POSTER_URL, POSTER_IMAGE } from "../helper/config";
import Styles from "../styles/Styles";
import Loader from "./Loader";

const TrendingPeople = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState();

  useEffect(() => {
    const getPeople = async () => {
      const data = await getTrendingPeople();
      setPeople(data.results);
      setLoading(false);
    };

    getPeople();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={Styles.heading}>Trending People</Text>
          <FlatList
            keyExtractor={(item) => item.id}
            data={people}
            renderItem={displayPeople}
            horizontal
          />
        </View>
      )}
    </View>
  );
};

const displayPeople = ({ item }) => {
  return (
    <View style={Styles.trendingPeopleContainer}>
      <Image
        source={{ uri: `${IMAGE_POSTER_URL}${item.profile_path}` }}
        style={Styles.trendingPeopleImage}
      />
      <Text style={Styles.trendingPeopleName}>{item.name}</Text>
    </View>
  );
};

export default TrendingPeople;
