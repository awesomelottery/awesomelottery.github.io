import React from 'react'
import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import './index.less'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">
        管理页面
      </View>
      <View className="index">
        <Button type="primary" className="btn">
          NutUI React Button {window.devicePixelRatio}
        </Button>
      </View>
    </View>
  )
}

export default Index
