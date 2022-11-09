import React, {useState,useEffect} from 'react'
import {View, Text,ScrollView, Button} from 'react-native'
import axios from 'axios';
import {List, ListItem, Left, Badge, Right, Thumbnail} from 'react-native-elements';

const UsersList = ({navigation}) => {

  const [bookings, setBookings] = useState();
  const [message, setMessage] = useState();
    

  const onLoad = async () => {

    const place_ref = await  axios.get('http://192.168.1.200:5000/inquiry/').then(res => {
      setBookings(res.data)    
     })
     
    
  }


    useEffect(() => {
<<<<<<< HEAD
           axios.get('http://192.168.1.200:5000/inquiry/').then(res => {
=======
      onLoad();

           axios.get('http://192.168.8.113:5000/inquiry/').then(res => {
>>>>>>> b5a2f3454e11d6bf69918769108e3f90fe4af5b4
            setBookings(res.data)    
           })

           const unsubscribe = navigation.addListener("focus", () => {
            onLoad() // Gets fired whenever this screen is in focus
          });
        
           return unsubscribe;





       },[navigation])

       
        const deleteBooking = async (id) => {
            try {
                await axios.delete(`http://192.168.8.113:5000/inquiry/${id}`)
                alert("Booking Deleted Successfully")
                navigation.navigate('UsersList')

                await axios.get('http://192.168.8.113:5000/inquiry/').then(res => {
                  setBookings(res.data)
                })




            } catch (error) {

                console.log(error)
            }
          }






  return (
    <ScrollView  >
    <View>
        
      <Button title="Create Inquiry" onPress={()=> navigation.navigate('CreateInquiry')}></Button>        

        </View>


        
     
        {bookings && bookings.map((booking , index) => (
            
            <ListItem key={index} bottomDivider
            onPress={()=> navigation.navigate('UserDetailScreen', {
              inqId : booking._id
            })}
            >
              
              <ListItem.Chevron/>
              
              <ListItem.Content>
              
              <ListItem.Title>{booking.inquiry}</ListItem.Title>
              <ListItem.Subtitle>{booking.name}</ListItem.Subtitle>
              <ListItem.Subtitle>{booking.email}</ListItem.Subtitle>

               
             

              </ListItem.Content>
             {booking.createdAt.toString() === booking.updatedAt.toString() ? ( <Badge value={"Edited"} status="success" />) : ( <Badge value={"Not edited"} status="error" />)}
             {booking.reply === "Our team will contact you soon" ? ( <Badge value={"Not Replyed"} status="error" />) : ( <Badge value={"Replyed"} status="success" />)}

              {/* <Button title="Delete" onPress={()=> deleteBooking(booking._id)}></Button> */}
              {/* <Button title="view" onPress={()=> navigation.navigate('UserDetailScreen', {
                  inqId : booking._id
                })}></Button> */}
            </ListItem>
        ))}
            {/* <View key={index}>
                <Text>{index+1}</Text>
                <Text>{booking.name}</Text>
                
                
                <Text>{booking.email}</Text>
                <Text>{booking.inquiry}</Text>
                <Button title="view" onPress={()=> navigation.navigate('UserDetailScreen', {
                  inqId : booking._id
                })}></Button>
                <Button title="delete" onPress={()=> deleteBooking(booking._id)}> del</Button>
              
               
                
                </View>
            </ListItem>
                
        ))} */}
    </ScrollView>



  )
}

export default UsersList

