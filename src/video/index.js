import {Dimensions, Image, Modal, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {IconConstant, IconCustom} from '../icon'
import {toast} from '../toast'

const {width, height} = Dimensions.get('window');


/**
 * 拍摄视频组建，包含视频展示
 * @returns {*}
 * @constructor
 */
export function VideoPicker(props) {
    let [loading, setLoading] = useState({show: false, msg: '上传中...'});//上传提示框
    let [list, setList] = useState(props.list || []);//列表数据
    const options = {
        title: '',
        mediaType: 'video',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    return <View style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }}>
        {
            list.map((item, index) => {
                return <VideoView
                    key={index}
                    {...item}
                />;
            })
        }
        <TouchableOpacity
            style={{
                borderWidth: 0.5,
                borderColor: '#ddd',
                width: 100,
                height: 100,
                paddingTop: 30,
                borderRadius: 1,
                marginTop: 10,
                marginLeft: 10,
                paddingLeft: 30,
            }}
            onPress={() => {
                ImagePicker.launchCamera(options, (response) => {
                    if (response.didCancel) {
                        console.log('User cancelled image picker');
                    } else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton);
                    } else {
                        // const source = {uri: response.uri};
                        uploadFn({
                            url: response.uri,
                            param: {
                                targetId: '1',               //
                                type: FileType.RECORD_IMG,   //
                            },
                            progress: (data) => {
                                setLoading({
                                    show: true,
                                    msg: data.progress + '%',
                                });
                                console.log(data);
                            },
                            error: (data) => {
                                console.log(data);
                                setLoading({
                                    show: false,
                                    msg: '上传中...',
                                });
                            },
                            complete: (data) => {
                                data = data.data;
                                // http://localhost:8080/thumbnail/2020-04/00fe13b7df8d4b8f973e18b30ea4df6d_f.jpg
                                setList([
                                    ...list,
                                    {
                                        img: data.path,
                                        url: data.path,
                                        withClose: true,
                                        id: data.fileId,
                                    },
                                ]);
                                setLoading({
                                    show: false,
                                    msg: '上传中...',
                                });
                            },
                        })
                            .catch(e => {
                                console.log(e);
                            });
                    }
                });
            }}
        >
            <IconCustom
                name={IconConstant.CAMERA}
                color={'#AAA'}
                size={40}
                onPress={() => {
                    // setViewVideo(false);
                }}
            ></IconCustom>
        </TouchableOpacity>
        <Modal
            animationType="slide"
            transparent={true}
            visible={loading.show}
            style={{
                width: 100, height: 40,
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text
                        style={{
                            color: '#666',
                        }}
                    >{loading.msg}</Text>
                </View>
            </View>

        </Modal>
    </View>;
}

/**
 * 上传视频按钮
 * @returns {*}
 * @constructor
 */
export function VideoPickerBtn() {
    const options = {
        title: '',
        mediaType: 'video',
        // customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    return <View>
        <TouchableOpacity
            style={{
                borderWidth: 1,
                borderColor: '#999',
                width: 100,
                height: 100,
                paddingTop: 30,
                borderRadius: 3,
                paddingLeft: 30,
            }}
            onPress={() => {
                ImagePicker.launchCamera(options, (response) => {
                    if (response.didCancel) {
                        console.log('User cancelled image picker');
                    } else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton);
                    } else {
                    }
                });
            }}
        >
            <IconCustom
                name={IconConstant.CAMERA}
                color={'#AAA'}
                size={40}
                onPress={() => {
                    // setViewVideo(false);
                }}
            ></IconCustom>
        </TouchableOpacity>
    </View>;
}

/**
 * props.img 预览图
 * props.id  图片ID,可根据此ID删除图片
 * props.withClose:bool  是否显示删除按钮
 * props.url 视频地址
 * @param props
 * @returns {*}
 * @constructor
 */
export function VideoView(props) {
    let [viewVideo, setViewVideo] = useState(false);
    let [destroySelf, setDestroySelf] = useState(false);
    if (destroySelf) {
        return <View></View>;
    }
    return <View
        // key={props.index}
        style={{
            marginRight: '3%',
            width: '30%',
        }}
    >
        <Modal
            animationType="slide"
            visible={viewVideo}
            onRequestClose={() => {
            }}
        >
            <TouchableOpacity
                style={{
                    textAlign: 'right',
                    position: 'absolute',
                    zIndex: 10,
                    right: 0,
                    backgroundColor: 'transparent',
                    top: 10, width: 50,
                }}
                onPress={() => {
                    setViewVideo(false);
                }}
            >
                <IconCustom
                    name={IconConstant.CIRCLE_CLOSE}
                    color={'#dd0000'}
                    size={24}
                    onPress={() => {
                        setViewVideo(false);
                    }}
                ></IconCustom>
            </TouchableOpacity>
            <Video
                source={{uri: props.url ? props.url : 'http://192.168.31.39:8080/background.mp4'}}   // Can be a URL or a local file.
                ref={(ref) => {
                    // this.player = ref;
                }}
                fullscreen={true}// Store reference
                fullscreenOrientation={'landscape'}
                controls={true}
                onBuffer={() => {

                }}                // Callback when remote video is buffering
                onError={() => {
                }}            // Callback when video cannot be loaded
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                }}/>
        </Modal>
        <TouchableOpacity
            onPress={() => {
                // setViewVideo(true);
            }}
            style={{
                width: '100%', height: 100,
                marginTop: 10,
                borderWidth: 0.5,
                borderColor: '#ddd',
                marginLeft: 0,
                marginRight: 10,
                position: 'relative',
            }}
        >
            <Image
                style={{width: '100%', height: 100}}
                source={{uri: props.img || 'http://t7.baidu.com/it/u=993252483,2562887706&fm=79&app=86&f=JPEG?w=1280&h=853'}}
            />
            {
                props.withClose ? <View
                    style={{
                        position: 'absolute',
                        top: -1, right: 1,
                        backgroundColor: 'transparent',
                    }}
                >
                    <IconCustom
                        name={IconConstant.CIRCLE_CLOSE}
                        color={'#aa0000'}
                        size={24}
                        onPress={() => {
                            if (props.id)
                                // setViewVideo(true);
                            {
                                del(RequestUrl.FILE + props.id)
                                    .then(res => {
                                        setDestroySelf(true);
                                    })
                                    .catch(e => {
                                        toast('操作失败');
                                    });
                            }
                        }}
                    ></IconCustom>
                </View> : null
            }
            <View
                style={{
                    position: 'absolute',
                    top: 24, right: 25,
                }}
            >
                <IconCustom
                    name={IconConstant.VIDEO_PLAY}
                    color={'#ddd'}
                    size={40}
                    onPress={() => {
                        setViewVideo(true);
                    }}
                ></IconCustom>
            </View>
        </TouchableOpacity>
    </View>;
}
