import {ActivityIndicator, CameraRoll, Dimensions, Image, Modal, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import ImageViewer from 'react-native-image-zoom-viewer';
import {IconConstant, IconCustom} from '../icon'
import {toast} from '../toast'

const {width, height} = Dimensions.get('window');

/**
 * 图片查看器
 * props.list:['url']
 * @returns {*}
 * @constructor
 */
export function ImageView(props) {
    if (!props.list || !props.list.length) {
        return <View><Text>没有图片</Text></View>;
    }

    const renderLoad = function () { //这里是写的一个loading
        // debugger;
        return (
            <View style={{marginTop: (height / 2) - 20}}>
                <ActivityIndicator
                    animating={true}
                    size={'large'}/>
            </View>
        );
    }

    const savePhoto = function (url) {
        let promise = CameraRoll.saveToCameraRoll(url);
        promise
            .then(function (result) {
                toast('已保存到系统相册');
            })
            .catch(function (error) {
                toast('保存失败！\n' + error);
            });
    }

    const images = props.list.map(item => {
        return {
            url: item || 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
            height: 60,
            height: 60,
        };
    });
    return <ImageViewer
        style={{
            // width: 100,
            // height: 100,
            borderWidth: 1,
            borderColor: '#fff'
        }}
        renderHeader={() => {
            return <View><Text>自定义header</Text></View>
        }}
        loadingRender={() => {
            return <ActivityIndicator
                animating={true}
                size={'small'}/>
        }}
        index={1} // 初始显示第几张
        show={true}
        useNativeDriver={true}
        pageAnimateTime={200}
        enablePreload={true}
        backgroundColor={"#eeeeee"}
        enableSwipeDown={false}
        failImageSource={{
            url: 'http://c-ssl.duitang.com/uploads/blog/202011/13/20201113135615_b0cac.jpg',
            height: 100, width: 100
        }}
        swipeDownThreshold={3000}
        saveToLocalByLongPress={true} //是否开启长按保存
        enableImageZoom={true} // 是否开启手势缩放
        menuContext={{'saveToLocal': '保存图片', 'cancel': '取消'}}
        // loadingRender={renderLoad}
        saveToLocal={(url) => {
            savePhoto(url)
        }}
        imageUrls={images}
    />;
}


/**
 * 图片查看视图
 * list:['url']
 * @param list
 * @returns {*}
 * @constructor
 */
export function ImagesView(props) {
    let [viewImage, setViewImage] = useState(false);
    if (!props.list || !props.list.length) {
        return <View><Text> </Text></View>;
    }
    return <>
        <Modal
            animationType="fade"
            visible={viewImage}
            onRequestClose={() => {
            }}
        >
            <TouchableOpacity
                style={{
                    textAlign: 'right',
                    position: 'absolute',
                    zIndex: 10,
                    right: 0,
                    top: 10, width: 50,
                }}
                onPress={() => {
                    setViewImage(false);
                }}
            >
                <IconCustom
                    name={IconConstant.CIRCLE_CLOSE}
                    color={'#dd0000'}
                    size={24}
                    onPress={() => {
                        setViewImage(false);
                    }}
                ></IconCustom>
            </TouchableOpacity>
            <ImageView
                list={props.list}
            />
        </Modal>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            {
                props.list.map((item, index) => {
                    return <View
                        style={{
                            display: 'flex',
                            margin: 5,
                            marginLeft: 0,
                        }}
                        key={index}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                setViewImage(true);
                            }}
                        >
                            <Image
                                style={{width: 66, height: 58}}
                                source={{uri: item}}></Image>
                        </TouchableOpacity>
                    </View>;
                })
            }
        </View>
    </>;
}
