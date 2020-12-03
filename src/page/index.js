import {ScrollView, View} from 'react-native';


export function Page(props) {
    return <ScrollView
        style={{flex: 1, borderWidth: 0}}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
    >
        <View
            style={{
                background: '#fff',
            }}
        >
            {props.children}
        </View>
    </ScrollView>;
}

export function PanelTitle(props) {
    return <View
        style={{
            marginBottom: 15,
            marginTop: 15,
        }}
    >
        <Text
            style={{
                paddingLeft: 20,
                fontSize: 18,
            }}
        >{props.title}</Text>
    </View>;
}
