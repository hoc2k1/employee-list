
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import EmployeeDetail from './EmployeeDetail';

export default class EmployeeMaster extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }

    async fetchUser() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();
        this.setState({ dataSource: json });
    }

    componentDidMount() {
        this.fetchUser();
    }

    renderRow(user) {
        return (
            <EmployeeDetail
                id={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                city={user.address.city}
            >

            </EmployeeDetail>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => this.renderRow(item)}
                />
            </View>
        )
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

