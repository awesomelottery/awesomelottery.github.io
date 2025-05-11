import React, { useRef } from 'react'
import { View } from '@tarojs/components'
import { Button, NavBar } from "@nutui/nutui-react-taro"
import { ArrowLeft } from '@nutui/icons-react-taro'
import { LuckyWheel, LuckyGrid, SlotMachine } from '@lucky-canvas/taro/react'
import './index.less'
import Taro from '@tarojs/taro'
import lotteryBg from '../../static/lottery/bg.jpg'
import startLotteryImg from '../../static/lottery/startlottery.png'
import wheelBgImg from '../../static/lottery/wheelbg.png'

function Index() {
  const myLucky = useRef(null)
  const luckProps = {
    blocks: [{
      padding: '30px',
      imgs: [{
        src: wheelBgImg,
        width: '100%',
        height: '100%'
      }]
    }],
    prizes: [
      {
        imgs: [{
          src: 'https://r.hpoi.net/gk/cover/s/2022/05/67b769e21b4f4779b5cefaf3a0a8a8b5.jpg',
          width: '40%',
          top: '40%',
        }],
        fonts: [{ text: '大和一番赏', fontSize: '12px',  top: '10%' }],
        background: '#e9e8fe'
      },
      {
        imgs: [{
          src: 'https://r.hpoi.net/gk/cover/s/2025/03/ca8855a3d1ba43ec8e7e49f724a7b55a.jpg',
          width: '40%',
          top: '40%',
        }],
        fonts: [{ text: '女帝', fontSize: '12px',  top: '10%' }],
        background: '#f0b9d9'
      },
      {
        imgs: [{
          src: 'https://r.hpoi.net/gk/cover/s/2022/05/67b769e21b4f4779b5cefaf3a0a8a8b5.jpg',
          width: '40%',
          top: '40%',
        }],
        fonts: [{ text: '大和一番赏', fontSize: '12px',  top: '10%' }],
        background: '#e9e8fe'
      },
      {
        imgs: [{
          src: 'https://r.hpoi.net/gk/cover/s/2025/03/ca8855a3d1ba43ec8e7e49f724a7b55a.jpg',
          width: '40%',
          top: '40%',
        }],
        fonts: [{ text: '女帝', fontSize: '12px',  top: '10%' }],
        background: '#f0b9d9'
      },
      {
        imgs: [{
          src: 'https://r.hpoi.net/gk/cover/s/2022/05/67b769e21b4f4779b5cefaf3a0a8a8b5.jpg',
          width: '40%',
          top: '40%',
        }],
        fonts: [{ text: '大和一番赏', fontSize: '12px',  top: '10%' }],
        background: '#e9e8fe'
      },
      {
        imgs: [{
          src: 'https://r.hpoi.net/gk/cover/s/2025/03/ca8855a3d1ba43ec8e7e49f724a7b55a.jpg',
          width: '40%',
          top: '40%',
        }],
        fonts: [{ text: '女帝', fontSize: '12px',  top: '10%' }],
        background: '#f0b9d9'
      },
    ],
    buttons: [
      { radius: '40px', background: '#617df2' },
      {
        radius: '40px',
        imgs: [{
          src: startLotteryImg,
          width: '100%',
          top: '-190%'
        }]
      },
    ],
  };
  return (
    <View className="nutui-page-lottery" style={{ backgroundImage: `url(${lotteryBg})`}}>
      <NavBar
        safeAreaInsetTop
        fixed
        back={<ArrowLeft />}
        onBackClick={() => {
          Taro.navigateBack()
        }}
      >手办周边大抽奖</NavBar>
      <View className="lottery-container">
        <LuckyWheel
          ref={myLucky}
          width='300px'
          height='300px'
          blocks={luckProps.blocks}
          prizes={luckProps.prizes}
          buttons={luckProps.buttons}
          onStart={() => { // 点击抽奖按钮会触发star回调
            // 调用抽奖组件的play方法开始游戏
            myLucky.current?.play()
            // 模拟调用接口异步抽奖
            setTimeout(() => {
              // 假设后端返回的中奖索引是0
              const index = 0
              // 调用stop停止旋转并传递中奖索引
              myLucky.current?.stop(index)
            }, 2500)
          }}
          onEnd={prize => { // 抽奖结束会触发end回调
            console.log(prize)
          }}
        ></LuckyWheel>

      </View>
    </View>
  )
}

export default Index
