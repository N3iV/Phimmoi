import React, { useEffect, useState } from "react";
import { View, Image, FlatList, Text, TouchableOpacity,TextInput,Button } from "react-native";
import Loader from "./Loader";
import { POSTER_IMAGE } from "../helper/config";
import { getMoviesByName } from "../api/movies";
import Styles from "../styles/Styles";
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchResults = (props) => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState();
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log('Search text:', searchText);
      };

    useEffect(() => {
        const getMovies = async (query) => {
            const data = await getMoviesByName(query);
            setMovies(data.results);
            setLoading(false);
        };

        getMovies(searchText);
    }, [searchText]);

    return (
        <View>
            {loading ? (
                <Loader />
            ) : (
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="search" size={20} color="#fff" style={{ marginHorizontal: 10 }} />
                    <TextInput
                        style={Styles.input}
                        placeholder="Search"
                        placeholderTextColor="#D2D2D2"
                        value={searchText}
                        onChangeText={text => setSearchText(text)}
                        onSubmitEditing={handleSearch}
                    />
                    </View>
                    {/* <TouchableOpacity>
                        <Text style={styles.cardText}>Movies</Text>
                        <View style={styles.cardText}> </View>
                    </TouchableOpacity> */}
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={movies}
                        renderItem={(item) => displayMovies(item, props)}
                    />
                </View>
            )}
        </View>
    );
};

const displayMovies = ({ item }, props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.push("movieDetails", { movieId: item.id });
            }}
            style={{ margin: 10 }}
        >
            <View style={Styles.movieContainer}>
                <Image
                    source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
                    style={Styles.posterImageFavList}
                />
                <View style={Styles.descMovieContainer}>
                    <Text style={Styles.favMovieTitle}>{item.original_title}</Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={Styles.favMovieDate}>{item.release_date}, </Text>
                        <Text style={Styles.favMovieDate}>vote: {item.vote_average}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default SearchResults;
