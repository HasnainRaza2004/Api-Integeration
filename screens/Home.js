import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from "react-native";



function Home({ navigation }) {
  const [apiData, setapiData] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setapiData(res.data);
      })
  }, []);
  return (
    <ScrollView>
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>PRODUCTS</Text>
      {apiData.map((e,i)=>(
        <>

              <View style={styles.productDetail} key={i}>
                <Image
                  source={{ uri: e.image }}
                  resizeMode="cover"
                  width={100}
                  height={100}
                />
                <Text style={styles.productTitle}>{e.title}</Text>
                <Text style={styles.productPrice}>Price : {e.price}</Text>
                <Text style={styles.productDescription}>{e.description}</Text>
                <Text style={styles.productCategory}>Category : {e.category}</Text>
                <Text style={styles.productRating}>Rating : {e.rating.rate}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Product',{state:[apiData]})}
                >
                  <Text>View Product</Text>
                </TouchableOpacity>
              </View>
            </>
      ))}
    </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainTitle: {
    backgroundColor: "#3a5a40",
    color: "#f4f1de",
    fontSize: 30,
    width: 1000,
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#52796f",
    alignItems: "center"
  },
  productDetail: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  productPrice: {
    color: "red",
    marginBottom: 5,
  },
  productDescription: {
    color: "darkgrey",
    alignItems: "center",
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 7,
  },
  productCategory: {
    marginBottom: 5,
  },
  productRating: {
    color: "orange",
    marginBottom: 10,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.10,
    shadowRadius: 12.00,

    elevation: 17,
  }
})

export default Home; 