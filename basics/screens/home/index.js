
import { Text, SafeAreaView,View,StyleSheet} from 'react-native'
import React, { Component } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { fetchDataAll } from '../../actions/app';
import { connect } from 'react-redux';
import User from './User';

const renderUser=({item})=><User item={item}/>;
class Home extends Component {
    componentDidMount(){
        const{fetchDataAll}=this.props;
        fetchDataAll()
    }
  render() {
    const {data}=this.props;
    if (data){
        console.log(data);
    }
    return (
<SafeAreaView>
    <View style={styles.container}>
        <Text style={{fontSize:25}}>
            User Details
        </Text>
        <FlatList data={data}
        renderItem={renderUser}/>

    </View>

</SafeAreaView>    )
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
const mapStateToProps= state=>{
    return{
        data: state.app.data,
    }
}
const mapDispatchToProps={
    fetchDataAll
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);