import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {colors, EditIcon, MinusIcon, PlusIcon, TrashIcon} from '../../assets';
import {Gap} from '../../components';

const Product = () => {
  return (
    <View style={{width: '100%'}}>
      <View style={styles.productCardContainer}>
        <TouchableOpacity>
          <TrashIcon />
        </TouchableOpacity>
        <Gap width={9} />
        <Gap height={30} width={2} backgroundColor="white" />
        <Gap width={9} />
        <View style={styles.productTitleContainer}>
          <Text style={styles.productText}>
            Cuci motor full (cuci kolong + vacuum)
          </Text>
          <Text style={styles.productText}>Rp30.000</Text>
        </View>

        <View style={styles.quantityContainer}>
          <TouchableOpacity>
            <EditIcon />
          </TouchableOpacity>
          <View style={styles.plusMinusContainer}>
            <TouchableOpacity
              style={styles.minusIcon}
              onPress={() => {
                console.log('wkwkwk');
              }}>
              <MinusIcon />
            </TouchableOpacity>
            <View style={styles.quantityInputContainer}>
              <TextInput
                style={styles.quantityInput}
                placeholder="0"
                textAlign="center"
              />
            </View>
            <TouchableOpacity>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productCardContainer: {
    backgroundColor: colors.secondaryGold,
    height: 64,
    elevation: 5,
    borderRadius: 7,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row',
  },
  productTitleContainer: {
    width: '60%',
    height: '80%',
  },
  productText: {
    fontSize: 14,
  },
  quantityContainer: {
    height: '80%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  plusMinusContainer: {
    flexDirection: 'row',
    // width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // backgroundColor: 'yellow',
  },
  quantityInputContainer: {
    paddingHorizontal: 3,
  },
  quantityInput: {
    // backgroundColor: 'red',
    borderBottomColor: colors.darkGrey,
    borderBottomWidth: 1,
    fontSize: 12,
    height: 30,
    width: 30,
    paddingBottom: 5,
  },
});
