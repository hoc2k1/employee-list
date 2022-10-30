import React from 'react';
import { StyleSheet, Text, View, Modal, Button, TouchableHighlight, Dimensions } from 'react-native';

let { width, height } = Dimensions.get('window');
export default class EmployeeDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    onPressCloseButton(visible) {
        this.setState({
            modalVisible: visible
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal visible={this.state.modalVisible}
                    animationType='slide'
                    transparent={true}>
                    <TouchableHighlight onPress={() => { this.onPressCloseButton(false) }}>
                        <View style={styles.modal}>
                            <TouchableHighlight onPress={() => { this.onPressCloseButton(true) }}>
                                <View style={styles.modalColumn}>
                                    <View style={styles.modalRow}>
                                        <Text style={styles.modalRowText}>ID: </Text>
                                        <Text style={styles.modalRowText}>{this.props.id}</Text>
                                    </View>

                                    <View style={styles.modalRow}>
                                        <Text style={styles.modalRowText}>Name: </Text>
                                        <Text style={styles.modalRowText}>{this.props.name}</Text>
                                    </View>

                                    <View style={styles.modalRow}>
                                        <Text style={styles.modalRowText}>Email: </Text>
                                        <Text style={styles.modalRowText}>{this.props.email}</Text>
                                    </View>

                                    <View style={styles.modalRow}>
                                        <Text style={styles.modalRowText}>Phone: </Text>
                                        <Text style={styles.modalRowText}>{this.props.phone}</Text>
                                    </View>

                                    <View style={styles.modalRow}>
                                        <Text style={styles.modalRowText}>City: </Text>
                                        <Text style={styles.modalRowText}>{this.props.city}</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>

                            <Button style={styles.modalCloseButton} title="Close" color="blue" onPress={() => { this.onPressCloseButton(false) }}></Button>
                        </View>
                    </TouchableHighlight>
                </Modal>

                <TouchableHighlight onPress={() => { this.onPressCloseButton(!this.state.modalVisible) }}>
                    <View style={styles.row}>

                        <Text style={styles.rowText}>{this.props.name}</Text>
                        <Text style={styles.rowText}>{this.props.email}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: width,
        height: height,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center'
    },

    row: {
        width: width,
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    modalRow: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        justifyContent: 'center'
    },

    modalColumn: {
        backgroundColor: 'white',
        paddingTop: 10
    },

    rowText: {
        borderWidth: 0.5,
        borderColor: 'gray',
        padding: 10,
        fontSize: 12,
        flex: 1,
        justifyContent: 'center'
    },

    modalRowText: {
        padding: 10,
        fontSize: 12,
        flex: 1,
        justifyContent: 'center'
    },

    modalCloseButton: {
        color: 'red',
        alignItems: 'center',
        width: 30
    },

});
