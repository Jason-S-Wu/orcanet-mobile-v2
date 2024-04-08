import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useRouter} from 'expo-router';
import {Button, Divider, Text} from 'react-native-paper';
import {MaterialIcons} from '@expo/vector-icons';
import {LineChart} from 'react-native-gifted-charts';
import {mockStatsMonthData} from '@/constants/mock-data/mockData';
import theme from '@/constants/Colors';
import {useRoute} from '@react-navigation/native';
import {MobileUser} from '@/constants/types';

const Profile = () => {
  const router = useRouter();
  const route = useRoute();
  const {user} = route.params as {user: MobileUser};

  const renderItem = ({item, index}: any) => {
    const borderColor = item.status === 'success' ? '#4CAF50' : '#F44336';
    return (
      <View style={[styles.transactionItem, {borderColor}]}>
        <View style={styles.infoContainer}>
          <Text style={styles.statusText}>TransactionID: {item.id}</Text>
          <Text style={styles.statusText}>Status: {item.status}</Text>
          <Text style={styles.dateText}>Date: {item.date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text>Price: {item.amount}</Text>
          <Text style={styles.noteText}>Note: {item.note}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text
              style={{
                marginTop: 20,
                marginLeft: 20,
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Account
            </Text>
            <Text style={{marginLeft: 20, fontSize: 18}}>
              User ID: <Text style={{fontSize: 14}}>{user.id}</Text>
            </Text>
            <Text style={{marginLeft: 20, fontSize: 18}}>
              Balance: {user.amount}
            </Text>
            <Divider />
            <Text style={{marginLeft: 20, fontSize: 20, fontWeight: 'bold'}}>
              Statistics
            </Text>
            <View style={{margin: 20, padding: 15}}>
              <Text style={{textAlign: 'center'}}>
                {' '}
                Monthly Data Usage (MB)
              </Text>
              <LineChart
                areaChart
                curved
                isAnimated
                animationDuration={1200}
                data={mockStatsMonthData}
                height={250}
                showVerticalLines
                spacing={44}
                initialSpacing={0}
                color1="skyblue"
                textColor1="green"
                hideDataPoints
                dataPointsColor1="blue"
                startFillColor1="skyblue"
                startOpacity={0.85}
                endOpacity={0.1}
                pointerConfig={{
                  pointerStripHeight: 160,
                  pointerStripColor: 'lightgray',
                  pointerStripWidth: 2,
                  pointerColor: 'lightgray',
                  radius: 6,
                  pointerLabelWidth: 100,
                  pointerLabelHeight: 90,
                  activatePointersOnLongPress: true,
                  autoAdjustPointerLabelPosition: false,
                  pointerLabelComponent: (
                    mockStatsMonthData: {value: string}[]
                  ) => {
                    return (
                      <View
                        style={{
                          paddingHorizontal: 5,
                          paddingVertical: 4,
                          borderRadius: 16,
                          backgroundColor: theme.colors.background,
                        }}
                      >
                        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                          {mockStatsMonthData[0].value + ' MB'}
                        </Text>
                      </View>
                    );
                  },
                }}
              />
            </View>

            <Text
              style={{
                marginLeft: 20,
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Transactions
            </Text>
          </>
        }
        data={user.transactions}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListFooterComponent={
          <Button
            mode="contained-tonal"
            onPress={() => router.push('/(modals)/settings')}
            style={{margin: 20, padding: 10, borderRadius: 10}}
          >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons
                name="settings"
                size={24}
                style={{marginRight: 10}}
              />
              <Text style={{fontSize: 20}}>Settings</Text>
            </View>
          </Button>
        }
      />
    </SafeAreaView>
  );
};

const styles = {
  transactionItem: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    // Add depth with box shadow
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    flex: 1,
  },
  amountContainer: {},
  statusText: {
    fontSize: 16,
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#888',
  },
  priceText: {
    fontWeight: 'bold',
  },
  noteText: {
    fontSize: 14,
    color: '#888',
  },
};

export default Profile;
