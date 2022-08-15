import React from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";

const Product = ({route}) => {
  console.log(route.params.state);

  return (

    <>
      <View>
        <Text style={{color:"black"}}>Hello</Text>
        {/* <Image
          source={{ uri: item.image }}
          resizeMode="cover"
          width={100}
          height={100}
        />
      </View>
      <View style={styles.productDetail}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>Price : {item.price}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productCategory}>Category : {item.category}</Text>
        <Text style={styles.productRating}>Rating : {item.rating.rate}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Product',{state:res.data})}
        >
          <Text>View Product</Text>
        </TouchableOpacity> */}
      </View>
    </>
  )
}

export default Product